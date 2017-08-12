/***
 * Attributes Module
 * @module attributes
 */

import { toCamelCase, getRealClassNamesArray } from './utils'

/**
 * Determine whether the element is assigned the given class.
 *
 * @param {Element} element A DOM node
 * @param {string} className The class name to search for
 * @return {boolean} Result
 */
export function hasClass (element, className) {
  if (element.classList) {
    return element.classList.contains(className)
  } else {
    return !!~element.className.indexOf(className)
  }
}

/**
 * Adds the specified class(es) to element.
 *
 * @param {Element} element A DOM node
 * @param {string} classNames One or more space-separated classes to be added to the class attribute
 */
export function addClass (element, classNames) {
  classNames = getRealClassNamesArray(classNames)
  if (element.classList) {
    element.classList.add(...classNames)
  } else {
    element.className += ' ' + classNames.join(' ')
  }
}

/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 *
 * @param {Element} element A DOM node
 * @param {string} classNames One or more space-separated classes to be removed to the class attribute
 */
export function removeClass (element, classNames) {
  classNames = getRealClassNamesArray(classNames)
  if (element.classList) {
    element.classList.remove(...classNames)
  } else {
    element.className = classNames.reduce((accumulator, className) => accumulator.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '), element.className).trim()
  }
}

/**
 * Add or remove one or more classes from element, depending on either the class's presence or the value of the state argument.
 *
 * @param {Element} element A DOM node
 * @param {string} classNames One or more class names (separated by spaces) to be toggled for each element in the matched set
 * @param {boolean} state A Boolean value to determine whether the class should be added or removed
 */
export function toggleClass (element, classNames, state) {
  if (typeof state === 'boolean') {
    if (state) {
      addClass(element, classNames)
    } else {
      removeClass(element, classNames)
    }
  } else {
    classNames = getRealClassNamesArray(classNames)
    classNames.forEach(className => hasClass(element, className) ? removeClass(element, className) : addClass(element, className))
  }
}

/**
 * Get the value of an attribute for the element
 *
 * @param {Element} element A DOM node
 * @param {string} attribute The name of the attribute to get
 * @return {string} The value of the attribute
 */
/**
 * Set the value of an attribute for the element.
 *
 * @param {Element} element A DOM node
 * @param {string} attribute The name of the attribute to set
 * @param {string} [value] A value to set for the attribute. If null, the specified attribute will be removed
 */
export function attr (element, attribute, value) {
  if (value !== undefined) {
    if (value === null) {
      element.removeAttribute(attribute)
    } else {
      element.setAttribute(attribute, value)
    }
  } else {
    return element.getAttribute(attribute)
  }
}

/**
 * Get the computed style properties for the element.
 *
 * @param {Element} element A DOM node
 * @param {string} ruleName A CSS property
 * @return {string} The value of the CSS property
 */
/**
  * Set a CSS property for the element.
  *
  * @param {Element} element A DOM node
  * @param {string} ruleName A CSS property
  * @param {string} [value] A value to set for the property
  */
export function css (element, ruleName, value) {
  if (value !== undefined) {
    element.style[toCamelCase(ruleName)] = value
  } else {
    return getComputedStyle(element)[ruleName]
  }
}
