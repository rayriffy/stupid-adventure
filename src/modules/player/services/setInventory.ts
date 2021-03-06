import { Inventory } from '../../../core/@types/Inventory'

export const setInventory = (itemKey: string, value: unknown): Inventory => {
  let inventory = JSON.parse(localStorage.getItem('inventory') ?? '{}')
  inventory[itemKey] = value
  localStorage.setItem('inventory', JSON.stringify(inventory))

  return inventory
}
