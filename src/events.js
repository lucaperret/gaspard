/***
 * Events Module
 * @module events
 */

/**
 * Remove an event handler.
 *
 * @param {Element} element A DOM node
 * @param {string} eventName An event type
 * @param {Function} eventHandler A handler function previously attached for the event
 */
export function off (element, eventName, eventHandler) {
  element.removeEventListener(eventName, eventHandler)
}

/**
 * Attach an event handler function for the element.
 *
 * @param {Element} element A DOM node
 * @param {string} eventName An event type
 * @param {Function} eventHandler A function to execute when the event is triggered
 */
export function on (element, eventName, eventHandler) {
  element.addEventListener(eventName, eventHandler)
}

/**
 * Execute all handlers and behaviors attached to the element for the given event type.
 *
 * @param {Element} element A DOM node
 * @param {string} eventName An event type
 * @param {Object} [data={}] Additional parameters to pass along to the event handler.
 */
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

/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Function} callback A function to execute after the DOM is ready.
 */
export function documentReady (callback) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    callback()
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}
