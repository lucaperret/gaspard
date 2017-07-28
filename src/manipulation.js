
export function remove (el) {
  if (typeof el === 'string') {
    el = document.querySelector(el)
  }
  if (el instanceof Element === false) {
    throw new TypeError('You should provide a valid selector or dom node as first argument')
  }
  el.parentNode.removeChild(el)
}
