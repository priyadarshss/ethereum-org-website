export const scrollIntoView = (
  toId: string,
  options: ScrollIntoViewOptions = { behavior: "smooth", block: "start" }
): void => {
  const element = document.getElementById(toId)

  if (!element) {
    return
  }

  const view = element.getBoundingClientRect()

  // Added 150px offset for the fixed header
  const offset = 150
  const topPosition = window.scrollY + view.top - offset

  window.scrollTo({
    top: topPosition,
    behavior: options.behavior,
  })
}
