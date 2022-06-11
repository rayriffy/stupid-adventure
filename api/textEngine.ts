import { VercelApiHandler } from '@vercel/node'

import { omit } from 'lodash'

import { gameData } from '../src/core/constants/gameData'
import { getMockDialog } from '../src/core/services/getMockDialog'

import { Dialog } from '../src/core/@types/Dialog'
import { Inventory } from '../src/core/@types/Inventory'
import { SerializedDialog } from '../src/core/@types/SerializedDialog'
import { renderText } from '../src/core/services/renderText'

export interface TextEngineRequest {
  from: string
  choice: string
  inventory: Inventory
}

export interface TextEngineResponse {
  dialog: Dialog
}

const api: VercelApiHandler = async (req, res) => {
  const payload = req.body as TextEngineRequest

  if (req.method === 'POST') {
    // find next dialog
    const targetDialog = gameData.dialogs.find(dialog => {
      const targetEntries = dialog.entries.find(
        ({ id, choice }) => id === payload.from && choice === payload.choice
      )

      return targetEntries
        ? targetEntries.condition
          ? targetEntries.condition(payload.inventory)
          : true
        : false
    })

    if (targetDialog) {
      const serializedDialogText = typeof targetDialog.text === 'string' ? await renderText(targetDialog.text) : await Promise.all(targetDialog.text.map(o => renderText(o)))
      const serializedDialogOption = targetDialog.options === undefined ? undefined : await Promise.all(targetDialog.options.filter(option =>
        option.hidden === undefined
          ? true
          : option.hidden(payload.inventory)
      )
      .map(option => omit(option, ['hidden'])).map(async option => ({
        id: option.id,
        text: await renderText(option.text)
      })))

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
