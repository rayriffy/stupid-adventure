import { Dialog } from './Dialog'
import { SerializedOption } from './SerializedOption'

export type SerializedDialog = Omit<Dialog, 'entries' | 'options'> & {
  options?: SerializedOption[]
}
