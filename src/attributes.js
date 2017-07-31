import { toCamelCase } from './utils'

/**
 * getRealClassNamesArray - Filter incorrect class names
 *
 * @param  {string} [classNames=''] One or more space-separated classes to be filtered
 * @return {Array}                  Valid class names array
 */
function getRealClassNamesArray (classNames = '') {
  return classNames.split(' ').filter(className => !!className)
}

/**
 * hasClass - Determine whether the element is assigned the given class.
 *
 * @param  {Element} element            A DOM Element
 * @param  {string} className           The class name to search for
 * @return {boolean}                    Result
 */
export function hasClass (element, className) {
  if (element.classList) {
    return element.classList.contains(className)
  } else {
    return !!~element.className.indexOf(className)
  }
}

/**
 * addClass - Adds the specified class(es) to element.
 *
 * @param  {Element} element           A DOM Element
 * @param  {string} classNames         One or more space-separated classes to be added to the class attribute.
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
 * removeClass - Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 *
 * @param  {Element} element           A DOM Element
 * @param  {string} classNames         One or more space-separated classes to be removed to the class attribute.
 */
export function removeClass (element, classNames) {
  classNames = getRealClassNamesArray(classNames)
  if (element.classList) {
    element.classList.remove(...classNames)
  } else {
    element.className = classNames.forEach(className => element.className.replace(className, ''))
  }
}

/**
 * toggleClass - Add or remove one or more classes from element, depending on either the class's presence or the value of the state argument.
 *
 * @param  {Element} element             A DOM Element
 * @param  {string} classNames           One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * @param  {boolean} state               A Boolean value to determine whether the class should be added or removed.
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

export function attr (element, attribute, value) {
  if (value !== undefined) {
    return element.setAttribute(attribute, value)
  } else {
    return element.getAttribute(attribute)
  }
}

export function css (element, ruleName, value) {
  if (value !== undefined) {
    element.style[toCamelCase(ruleName)] = value
  } else {
    return getComputedStyle(element)[ruleName]
  }
}
