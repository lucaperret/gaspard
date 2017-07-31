export function find (selector, context = document) {
  if (context instanceof Element === false && context instanceof HTMLDocument === false) {
    throw new TypeError('You should provide a valid dom node as second argument')
  }
  let elements
  if (/^#[\w-]*$/.test(selector)) {
    elements = document.getElementById(selector.substr(1))
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

export function is (element, selectorOrElement) {
  if (selectorOrElement === 'string') {
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

export function contains (element, child) {
  return element !== child && element.contains(child)
}

export function prev (element) {
  return element.previousElementSibling
}

export function next (element) {
  return element.nextElementSibling
}

export function siblings (element) {
  return [...element.parentNode.children].fitler(child => child !== element)
}

export function parent (element) {
  return element.parentNode
}
