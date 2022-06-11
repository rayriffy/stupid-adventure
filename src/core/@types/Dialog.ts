import { Inventory } from "./Inventory"
import { Option } from './Option'

export interface Dialog {
  id: string
  entries: {
    id: string
    choice: string
    condition?(inventory: Inventory): boolean
  }[]
  text: string | string[]
  options?: Option[]
  ending?: string
  inventorySet?: {
    [key: string]: boolean
  }
}
