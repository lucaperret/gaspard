
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
 * @param  {string} className           The class name to search for
 * @param  {Element} [context=document] A DOM Element or Document
 * @return {boolean}                    Result
 */
export function hasClass (className, context = document) {
  if (typeof className !== 'string') {
    throw new TypeError('You should provide a class as the first argument')
  }
  if (context.classList) {
    return context.classList.contains(className)
  } else {
    return !!~context.className.indexOf(className)
  }
}

/**
 * addClass - Adds the specified class(es) to element.
 *
 * @param  {string} classNames         One or more space-separated classes to be added to the class attribute.
 * @param  {Element} [context=document] A DOM Element or Document
 */
export function addClass (classNames, context = document) {
  if (typeof context === 'string') {
    context = document.querySelector(context)
  }
  if (context instanceof Element === false) {
    throw new TypeError('You should provide a valid selector or dom node as second argument')
  }
  if (typeof classNames !== 'string') {
    throw new TypeError('You should provide a class as the first argument')
  }
  classNames = getRealClassNamesArray(classNames)
  if (context.classList) {
    context.classList.add(...classNames)
  } else {
    context.className += ' ' + classNames.join(' ')
  }
}

/**
 * removeClass - Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 *
 * @param  {string} classNames         One or more space-separated classes to be removed to the class attribute.
 * @param  {Element} [context=document] A DOM Element or Document
 */
export function removeClass (classNames, context = document) {
  classNames = getRealClassNamesArray(classNames)
  if (context.classList) {
    context.classList.remove(...classNames)
  } else {
    context.className = classNames.forEach(className => context.className.replace(className, ''))
  }
}

/**
 * toggleClass - Add or remove one or more classes from element, depending on either the class's presence or the value of the state argument.
 *
 * @param  {string} classNames           One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * @param  {boolean} state               A Boolean value to determine whether the class should be added or removed.
 * @param  {Element} [context=document]  A DOM Element or Document
 */
export function toggleClass (classNames, state, context = document) {
  if (typeof state === 'boolean') {
    if (state) {
      addClass(classNames, context)
    } else {
      removeClass(classNames, context)
    }
  } else {
    classNames = getRealClassNamesArray(classNames)
    classNames.forEach(className => hasClass(className, context) ? removeClass(className, context) : addClass(className, context))
  }
}
