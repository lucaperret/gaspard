/***
 * Content Module
 * @module content
 */

/**
 * Parses a string into an array of DOM nodes.
 *
 * @param {string} htmlString HTML string to be parsed
 * @return {Element[]} DOM nodes
 */
export function parseHTML (htmlString) {
  const tmp = document.implementation.createHTMLDocument()
  tmp.body.innerHTML = htmlString
  return tmp.body.children
}

/**
 * Insert content, specified by the second parameter, before the element.
 *
 * @param {Element} element A DOM node
 * @param {string} htmlString HTML string to insert
 */
export function before (element, htmlString) {
  element.insertAdjacentHTML('beforebegin', htmlString)
}

/**
 * Insert content, specified by the second parameter, after the element.
 *
 * @param {Element} element A DOM node
 * @param {string} htmlString HTML string to insert
 */
export function after (element, htmlString) {
  element.insertAdjacentHTML('afterend', htmlString)
}

/**
 * Insert an element, specified by the second parameter, to the beginning of the parent element.
 *
 * @param {Element} parent Parent DOM element
 * @param {Element} element DOM element to insert
 */
export function prepend (parent, element) {
  parent.insertBefore(element, parent.firstChild)
}

/**
 * Insert an element, specified by the second parameter, to the end of the parent element.
 *
 * @param {Element} parent Parent DOM element
 * @param {Element} element DOM element to insert
 */
export function append (parent, element) {
  parent.appendChild(element)
}

/**
 * Create a deep copy of the element.
 *
 * @param {Element} element A DOM node
 * @return {Element} Cloned DOM Element
 */
export function clone (element) {
  return element.cloneNode(true)
}

/**
 * Remove the element from the DOM
 *
 * @param {Element} element The element to remove
 */
export function remove (element) {
  element.parentNode.removeChild(element)
}

/**
 * Get the combined text contents of the element, including his descendants.
 *
 * @param {Element} element A DOM node
 * @return {string}
 */
/**
  * Set the content of the element to the specified text.
  *
  * @param {Element} element A DOM node
  * @param {string} textString The text to set as the content of the element. When Number or Boolean is supplied, it will be converted to a String representation.
  */
export function text (element, textString) {
  if (textString !== undefined) {
    element.textContent = String(textString)
  } else {
    return element.textContent
  }
}

/**
 * Get the HTML contents of the element.
 *
 * @param {Element} element A DOM node
 * @return {string}
 */
/**
  * Set the HTML contents of the element.
  *
  * @param {Element} element A DOM node
  * @param {string} htmlString A string of HTML to set as the content
  */
export function html (element, htmlString) {
  if (htmlString !== undefined) {
    element.innerHTML = htmlString
  } else {
    return element.innerHTML
  }
}

/**
 * Replace element with the provided new content.
 *
 * @param {Element} element A DOM node
 * @param {string} htmlString The HTML string content to insert
 */
export function replaceWith (element, htmlString) {
  element.outerHTML = htmlString
}
