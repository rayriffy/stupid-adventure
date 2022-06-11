import { Inventory } from "./Inventory"

export interface Option {
  id: string
  text: string
  hidden?(inventory: Inventory): boolean
}
