import { addClass, removeClass, toggleClass } from './attributes'
import { remove } from './manipulation'

class NesElements {
  constructor (elements) {
    elements = [...elements]
    this.length = elements.length
    Object.assign(this, elements)
    console.log(this)
  }
  each (callback) {
    Array.from(this).forEach(callback)
    return this
  }
  addClass (classNames) {
    this.each(element => addClass(classNames, element))
    return this
  }
  removeClass (classNames) {
    this.each(element => removeClass(classNames, element))
    return this
  }
  toggleClass (classNames, state) {
    this.each(element => toggleClass(classNames, state, element))
    return this
  }
  remove () {
    this.each(element => remove(element))
    return this
  }
  find (selector) {
    console.log(Array.from(this)[0].getElementById)
    // console.log(Array.from(this).map(element => console.log(element)))
    return [...Array.from(this).map(element => find(selector, element))]
  }
}

export function documentReady (callback) {
  if (callback instanceof Function === false) {
    throw new TypeError('You should provide a function as first argument')
  }
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    callback()
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}

export function find (selector, context = document) {
  if (typeof selector !== 'string') {
    throw new TypeError('You should provide a selector as the first argument')
  }
  if (context instanceof Element === false && context instanceof HTMLDocument === false) {
    throw new TypeError('You should provide a valid dom node as second argument')
  }
  let elements
  if (/^(#?[\w-]+|\.[\w-.]+)$/.test(selector)) {
    switch (selector.charAt(0)) {
    case '#':
      elements = [context.getElementById(selector.substr(1))]
      break
    case '.':
      elements = context.getElementsByClassName(selector.substr(1).replace(/\./g, ' '))
      break
    default:
      elements = context.getElementsByTagName(selector)
    }
  } else {
    elements = context.querySelectorAll(selector)
  }

  return new NesElements(elements)
}
