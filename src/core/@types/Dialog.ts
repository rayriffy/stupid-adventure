import { Inventory } from './Inventory'
import { Option } from './Option'

type Text = string | string[]

export interface Dialog<Context = unknown> {
  id: string
  entries: {
    id: string
    choice: string
    condition?(
      inventory: Inventory
    ): (boolean | Context) | Promise<boolean | Context>
  }[]
  text: Text | ((context: Context) => Text | Promise<Text>)
  options?: Option[]
  ending?: string
  inventorySet?: {
    [key: string]: boolean
  }
}
