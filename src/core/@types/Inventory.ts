import { InventoryKey } from "../constants/inventoryDict"

export type Inventory = {
  [key in InventoryKey]: boolean
}
