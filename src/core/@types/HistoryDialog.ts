import { SerializedDialog } from './SerializedDialog'
import { SerializedOption } from './SerializedOption'

export interface HistoryDialog {
  dialog: SerializedDialog
  chosenChoice: SerializedOption
}
