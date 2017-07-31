
export function viewportPosition (element) {
  return element.getBoundingClientRect()
}

export function offset (element) {
  const rect = viewportPosition(element)
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}

export function position (element) {
  return {
    left: element.offsetLeft,
    top: element.offsetTop
  }
}

export function outerHeight (element, withMargin) {
  let height = element.offsetHeight
  if (withMargin) {
    const style = getComputedStyle(element)
    height += parseInt(style.marginTop) + parseInt(style.marginBottom)
  }
  return height
}

export function outerWidth (element, withMargin) {
  let width = element.offsetWidth
  if (withMargin) {
    const style = getComputedStyle(element)
    width += parseInt(style.marginLeft) + parseInt(style.marginRight)
  }
  return width
}
