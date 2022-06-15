import { VercelApiHandler } from '@vercel/node'

import { omit } from 'lodash'

import { gameData } from '../src/core/constants/gameData'
import { getMockDialog } from '../src/core/services/getMockDialog'
import { renderText } from '../src/core/services/renderText'
import { findAsync } from '../src/core/services/findAsync'

import { Dialog } from '../src/core/@types/Dialog'
import { Inventory } from '../src/core/@types/Inventory'
import { SerializedDialog } from '../src/core/@types/SerializedDialog'

export interface TextEngineRequest {
  from: string
  choice: string
  inventory: Inventory
}

export interface TextEngineResponse {
  dialog: SerializedDialog
}

const api: VercelApiHandler = async (req, res) => {
  const payload = req.body as TextEngineRequest

  if (req.method === 'POST') {
    // find next dialog
    let contextCache: unknown

    // locate dialog
    const targetDialog = await findAsync(gameData.dialogs, async dialog => {
      const targetEntries = dialog.entries.find(
        ({ id, choice }) => id === payload.from && choice === payload.choice
      )

      // if there's no targetEntries, then reject
      if (targetEntries === undefined) return false
      // if there's no condition then accept
      else if (
        targetEntries !== undefined &&
        targetEntries.condition === undefined
      )
        return true

      // otherwise, run condition
      const conditionResult = await targetEntries.condition(payload.inventory)

      if (conditionResult === false) {
        return false
      } else {
        // if conditionResult is true, then set context to cache then proceed
        contextCache = conditionResult
        return true
      }
    })

    if (targetDialog) {
      // if text is a function, then call it with context first
      const processedDialogText =
        typeof targetDialog.text === 'function'
          ? await targetDialog.text(contextCache)
          : targetDialog.text

      // render text from markdown
      const serializedDialogText =
        typeof processedDialogText === 'string'
          ? await renderText(processedDialogText)
          : await Promise.all(processedDialogText.map(o => renderText(o)))
      const serializedDialogOption =
        targetDialog.options === undefined
          ? undefined
          : await Promise.all(
              targetDialog.options
                .filter(option =>
                  option.hidden === undefined
                    ? true
                    : option.hidden(payload.inventory)
                )
                .map(option => omit(option, ['hidden']))
                .map(async option => ({
                  id: option.id,
                  text: await renderText(option.text),
                }))
            )

      // final check to serialize everything
      let serializedDialog: SerializedDialog = {
        ...omit(targetDialog, ['entries']),
        text: serializedDialogText,
        ...(serializedDialogOption === undefined
          ? {}
          : {
              options: serializedDialogOption,
            }),
      }

      return res.status(200).send({
        dialog: serializedDialog,
      })
    } else {
      return res.status(200).send({
        dialog: getMockDialog('Hey! You are not supposed to be here!'),
      })
    }
  } else {
    return res.status(200).send({
      dialog: getMockDialog('Dude, did you try to inject something?'),
    })
  }
}

export default api
