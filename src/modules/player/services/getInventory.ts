import { Inventory } from '../../../core/@types/Inventory'

export const getInventory = (): Inventory => {
  let inventory = JSON.parse(localStorage.getItem('inventory') ?? '{}')

  return inventory
}
