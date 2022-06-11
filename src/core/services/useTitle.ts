export const useTitle = (title?: string) => {
  document.querySelector('title').innerHTML = title
    ? `${title} · Stupid Adventure`
    : 'Stupid Adventure'
}
