import { Component, createSignal, onMount } from 'solid-js'

import { getInventory } from '../services/getInventory'
import { resetInventory } from '../services/resetInventory'

import { Preview } from './preview'
import { HistoryDialogRenderer } from './historyDialogRenderer'

import { SerializedDialog } from '../../../core/@types/SerializedDialog'
import { HistoryDialog } from '../../../core/@types/HistoryDialog'
import { SerializedOption } from '../../../core/@types/SerializedOption'
import {
  TextEngineRequest,
  TextEngineResponse,
} from '../../../../api/textEngine'
import { ActiveDialogRenderer } from './activeDialogRenderer'
import { ChoiceRenderer } from './choiceRenderer'
import { setInventory } from '../services/setInventory'

export const GamePlayer: Component = props => {
  const [preview, setPreview] = createSignal<boolean>(true)

  const [historyDialogs, setHistoryDialogs] = createSignal<HistoryDialog[]>([])
  const [process, setProcess] = createSignal<boolean>(false)
  const [latestDialog, setLatestDialog] = createSignal<SerializedDialog | null>(
    null
  )

  const [allowChoicePicker, setAllowChoicePicker] = createSignal<boolean>(false)

  const pickChoice = async (dialogId: string, option: SerializedOption) => {
    setProcess(true)

    // if there's existing dialog in latest, then push it to history
    if (latestDialog() !== null)
      setHistoryDialogs(prev => [
        ...prev,
        {
          dialog: latestDialog(),
          chosenChoice: option,
        },
      ])

    // get the dialog from the server
    const inventory = getInventory()
    const payload: TextEngineRequest = {
      from: dialogId,
      choice: option.id,
      inventory: inventory,
    }
    const dialogRes: TextEngineResponse = await fetch('/api/textEngine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(async o => await o.json())

    // if inventory has to be set, then be it
    if (dialogRes.dialog.inventorySet !== undefined) {
      Object.entries(dialogRes.dialog.inventorySet).map(([key, value]) =>
        setInventory(key, value)
      )
    }

    setLatestDialog(dialogRes.dialog)
    setProcess(false)
  }

  const reset = () => {
    setProcess(true)
    // reset history, and inventory
    setHistoryDialogs([])
    resetInventory()
    setLatestDialog(null)

    pickChoice('start', {
      id: 'start',
      text: 'start',
    })
  }

  const start = () => {
    setProcess(true)
    setPreview(false)
    reset()
  }

  return (
    <>
      {preview() ? (
        <Preview start={start} />
      ) : (
        <div class="w-full h-full">
          <div class="h-3/4 overflow-y-scroll flex flex-col-reverse space-y-4 px-3 dialog-styling">
            <div class="my-4 flex flex-col space-y-4">
              <ActiveDialogRenderer
                dialog={latestDialog}
                process={process}
                onAllowOption={setAllowChoicePicker}
              />
            </div>
            <HistoryDialogRenderer historyDialogs={historyDialogs} />
          </div>
          <div class="h-1/4 border-t-4 border-gray-500 overflow-y-scroll p-4">
            <ChoiceRenderer
              dialog={latestDialog}
              process={process}
              restart={reset}
              onOption={(dialogId, option) => pickChoice(dialogId, option)}
              allowChoicePicker={allowChoicePicker}
            />
          </div>
        </div>
      )}
    </>
  )
}
