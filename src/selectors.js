/***
 * Selectors Module
 * @namespace selectors
 */

/**
 * Return a collection of matched elements either found in the DOM based on passed argument
 *
 * @param {string} selector Accepts a string containing a CSS selector which is then used to match a set of elements
 * @param {(HTMLDocument|Element)} [context=document] A DOM Element or Document
 * @return {Array} A collection of DOM Elements
 */
export function find (selector, context = document) {
  if (context instanceof Element === false && context instanceof HTMLDocument === false) {
    throw new TypeError('You should provide a valid dom node as second argument')
  }
  let elements
  if (/^#[\w-]*$/.test(selector)) {
    elements = document.getElementById(selector.substr(1)) || []
  } else if (/^\.[\w-]*$/.test(selector)) {
    elements = context.getElementsByClassName(selector.slice(1))
  } else if (/^\w+$/.test(selector)) {
    elements = context.getElementsByTagName(selector)
  } else {
    elements = context.querySelectorAll(selector)
  }
  if (elements.length) {
    elements = [...elements]
  }
  return elements
}

/**
 * Check the element against a selector or element, and return true if the element match the given argument.
 *
 * @param {Element} element A DOM node
 * @param {(string|Element)} selectorOrElement A string containing a selector expression or a DOM node
 * @return {boolean} Is element match with selectorOrElement
 */
export function is (element, selectorOrElement) {
  if (typeof selectorOrElement === 'string') {
    return (
      element.matches ||
      element.matchesSelector ||
      element.msMatchesSelector ||
      element.mozMatchesSelector ||
      element.webkitMatchesSelector ||
      element.oMatchesSelector
    ).call(element, selectorOrElement)
  } else {
    return element === selectorOrElement
  }
}

/**
 * Check to see if a DOM element is a descendant of another DOM element.
 *
 * @param {Element} element A DOM node
 * @param {Element} child A potential child DOM node
 * @return {boolean} Is element has child as a descendant
 */
export function contains (element, child) {
  return element !== child && element.contains(child)
}

/**
 * Get the immediately preceding sibling of the element.
 *
 * @param {Element} element A DOM node
 * @return {Element} The previous DOM node
 */
export function prev (element) {
  return element.previousElementSibling
}

/**
 * Get the immediately following sibling of the element.
 *
 * @param {Element} element A DOM node
 * @return {Element} The following DOM node
 */
export function next (element) {
  return element.nextElementSibling
}

/**
 * Get the siblings of the element.
 *
 * @param {Element} element A DOM node
 * @return {Array} Siblings DOM nodes
 */
export function siblings (element) {
  return [...element.parentNode.children].filter(child => child !== element)
}

/**
 * Get the parent of the element.
 *
 * @param {Element} element A DOM node
 * @return {Element} The parent DOM node
 */
export function parent (element) {
  return element.parentNode
}
