
export function off (element, eventName, eventHandler) {
  element.removeEventListener(eventName, eventHandler)
}

export function on (element, eventName, eventHandler) {
  element.addEventListener(eventName, eventHandler)
}

export function trigger (element, eventName, data = {}) {
  const isNativeEvent = !!element['on' + eventName]
  let event
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, { detail: data })
  } else {
    event = document.createEvent('CustomEvent')
    event.initCustomEvent(eventName, true, !isNativeEvent, data)
  }

  element.dispatchEvent(event)
}

export function documentReady (callback) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    callback()
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}
