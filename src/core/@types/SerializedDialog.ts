import { Dialog } from './Dialog'
import { SerializedOption } from './SerializedOption'

export type SerializedDialog = Omit<Dialog, 'entries' | 'options' | 'text'> & {
  text: string | string[]
  options?: SerializedOption[]
}
