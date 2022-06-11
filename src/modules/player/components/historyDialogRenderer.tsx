import { Accessor, Component, For } from "solid-js"

import { HistoryDialog } from "../../../core/@types/HistoryDialog"
import { DialogTextRenderer } from "./dialogTextRenderer"

interface Props {
  historyDialogs: Accessor<HistoryDialog[]>
}

export const HistoryDialogRenderer: Component<Props> = props => {
  const { historyDialogs } = props

  return (
    <For each={historyDialogs().reverse()}>
      {historyDialog => (
        <>
          <p innerHTML={historyDialog.chosenChoice.text} />
          <DialogTextRenderer text={historyDialog.dialog.text} />
        </>
      )}
    </For>
  )
}