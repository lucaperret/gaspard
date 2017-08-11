/***
 * Positions Module
 * @module positions
 */

/**
 * Get the size of the element and its position relative to the viewport.
 *
 * @param {Element} element A DOM node
 * @return {Object} Object with properties: left, top, right, bottom, x, y, width, height
 */
export function viewportPosition (element) {
  return element.getBoundingClientRect()
}

/**
 * Get the current coordinates of the element, relative to the document.
 *
 * @param {Element} element A DOM node
 * @return {Object} Contain the properties top and left
 */
export function offset (element) {
  const rect = viewportPosition(element)
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }
}

/**
 * Get the current coordinates of the element, relative to the offset parent.
 *
 * @param {Element} element A DOM node
 * @return {Object} Contain the properties top and left
 */
export function position (element) {
  return {
    left: element.offsetLeft,
    top: element.offsetTop
  }
}

/**
 * Get the current computed outer height (including padding, border, and optionally margin) for the element.
 *
 * @param {Element} element A DOM node
 * @param {boolean} withMargin A Boolean indicating whether to include the element's margin in the calculation.
 * @return {number} Height of the element, including top and bottom padding, border, and optionally margin, in pixels
 */
export function outerHeight (element, withMargin) {
  let height = element.offsetHeight
  if (withMargin) {
    const style = getComputedStyle(element)
    height += parseInt(style.marginTop || 0) + parseInt(style.marginBottom || 0)
  }
  return height
}

/**
 * Get the current computed outer width (including padding, border, and optionally margin) for the element.
 *
 * @param {Element} element A DOM node
 * @param {boolean} withMargin A Boolean indicating whether to include the element's margin in the calculation.
 * @return {number} Width of the element, including left and right padding, border, and optionally margin, in pixels
 */
export function outerWidth (element, withMargin) {
  let width = element.offsetWidth
  if (withMargin) {
    const style = getComputedStyle(element)
    width += parseInt(style.marginLeft || 0) + parseInt(style.marginRight || 0)
  }
  return width
}
