import { Inventory } from '../../../core/@types/Inventory'

export const resetInventory = () => {
  let inventory: Inventory = JSON.parse(
    localStorage.getItem('inventory') ?? '{}'
  )

  localStorage.setItem(
    'inventory',
    JSON.stringify({
      ...(typeof inventory.email !== 'undefined'
        ? {
            email: inventory.email,
          }
        : {}),
    })
  )
}
