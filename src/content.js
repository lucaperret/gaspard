
export function parseHTML (htmlString) {
  const tmp = document.implementation.createHTMLDocument()
  tmp.body.innerHTML = htmlString
  return tmp.body.children
}

export function before (element, htmlString) {
  element.insertAdjacentHTML('beforebegin', htmlString)
}

export function after (element, htmlString) {
  element.insertAdjacentHTML('afterend', htmlString)
}

export function prepend (parent, element) {
  parent.insertBefore(element, parent.firstChild)
}

export function append (parent, element) {
  parent.appendChild(element)
}

export function clone (element) {
  return element.cloneNode(true)
}

export function remove (element) {
  element.parentNode.removeChild(element)
}

export function text (element, textString) {
  if (textString !== undefined) {
    element.textContent = textString
  } else {
    return element.textContent
  }
}

export function html (element, htmlString) {
  if (htmlString !== undefined) {
    element.innerHTML = htmlString
  } else {
    return element.innerHTML
  }
}

export function replaceWith (element, htmlString) {
  element.outerHTML = htmlString
}
