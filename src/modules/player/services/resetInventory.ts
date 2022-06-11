export const resetInventory = () => {
  localStorage.setItem("inventory", JSON.stringify({}))
}
