/***
 * Collection Module
 * @module collection
 */

import { addClass, removeClass, toggleClass, attr, css } from './attributes'
import { before, after, prepend, append, remove, text, html, replaceWith } from './content'
import { fadeIn, fadeOut, hide, show } from './effects'
import { on, off, trigger } from './events'
import { find } from './selectors'

/**
 * Use Collection class to perform actions on Elements
 * @example
 * import { Collection } from 'gaspard'
 * const collection = new Collection('div.highlight')
 * collection
 *   .css('background-color', 'green')
 *   .find('p:first-child') // returns a new gaspard collection
 *   .addClass('introduction')
 *   .fadeIn(400)
 *   .elements // Array of matched elements
 *   .forEach(element => {
 *     console.log('div.highlight first paragraph', element)
 *   })
 *
 * @param {(Element[]|Element|string)} [elements=[]] DOM Elements, Element, or string to query the DOM
 * @return {Collection} Collection containing elements
 */
export default class Collection {
  constructor (elements = []) {
    let contextElements
    if (Array.isArray(elements)) {
      contextElements = elements
    } else if (typeof elements === 'string') {
      contextElements = find(elements)
    } else {
      contextElements = [elements]
    }
    this.elements = [].concat(contextElements)
  }
  /**
   * Apply a method on each elements and returns the collection to chain methods
   * @param {Function} method Accept a method to run on each elements
   * @param {any} params A list of argument to call the method with
   * @return {Collection} Collection containing elements
   */
  each (method, ...params) {
    this.elements.forEach(element => method(element, ...params))
    return this
  }
  /**
   * Add classes to each elements
   * @see {@link attributes/addClass}
   * @param {string} classNames
   * @return {Collection} Collection containing elements
   */
  addClass (classNames) {
    return this.each(addClass, classNames)
  }
  /**
   * Toggle classes to each elements
   * @see {@link attributes/toggleClass}
   * @param {string} classNames
   * @param {boolean} state
   * @return {Collection} Collection containing elements
   */
  toggleClass (classNames, state) {
    return this.each(toggleClass, classNames, state)
  }
  /**
   * Remove classes to each elements
   * @see {@link attributes/removeClass}
   * @param {string} classNames
   * @return {Collection} Collection containing elements
   */
  removeClass (classNames) {
    return this.each(removeClass, classNames)
  }
  /**
   * Set attribute to each elements
   * @see {@link attributes/attr}
   * @param {string} attribute
   * @param {any} value
   * @return {Collection} Collection containing elements
   */
  attr (attribute, value) {
    return this.each(attr, attribute, value)
  }
  /**
   * Set CSS value to each elements
   * @see {@link attributes/css}
   * @param {string} ruleName
   * @param {string} value
   * @return {Collection} Collection containing elements
   */
  css (ruleName, value) {
    return this.each(css, ruleName, value)
  }
  /**
   * Insert content before each elements
   * @see {@link content/before}
   * @param {string} htmlString
   * @return {Collection} Collection containing elements
   */
  before (htmlString) {
    return this.each(before, htmlString)
  }
  /**
   * Insert content after each elements
   * @see {@link content/after}
   * @param {string} htmlString
   * @return {Collection} Collection containing elements
   */
  after (htmlString) {
    return this.each(after, htmlString)
  }
  /**
   * Prepend element to each elements
   * @see {@link content/prepend}
   * @param {Element} element
   * @return {Collection} Collection containing elements
   */
  prepend (element) {
    return this.each(prepend, element)
  }
  /**
   * Append element to each elements
   * @see {@link content/append}
   * @param {Element} element
   * @return {Collection} Collection containing elements
   */
  append (element) {
    return this.each(append, element)
  }
  /**
   * Remove each elements
   * @see {@link content/remove}
   * @return {Collection} Collection containing elements
   */
  remove () {
    return this.each(remove)
  }
  /**
   * Set text to each elements
   * @see {@link content/text}
   * @param {string} textString
   * @return {Collection} Collection containing elements
   */
  text (textString) {
    return this.each(text, textString)
  }
  /**
   * Set html to each elements
   * @see {@link content/html}
   * @param {string} htmlString
   * @return {Collection} Collection containing elements
   */
  html (htmlString) {
    return this.each(html, htmlString)
  }
  /**
   * Replace each elements
   * @see {@link content/replaceWith}
   * @param {string} htmlString
   * @return {Collection} Collection containing elements
   */
  replaceWith (htmlString) {
    return this.each(replaceWith, htmlString)
  }
  /**
   * Fade in each elements
   * @see {@link effects/fadeIn}
   * @param {number} duration
   * @return {Collection} Collection containing elements
   */
  fadeIn (duration) {
    return this.each(fadeIn, duration)
  }
  /**
   * Fade out each elements
   * @see {@link effects/fadeOut}
   * @param {number} duration
   * @return {Collection} Collection containing elements
   */
  fadeOut (duration) {
    return this.each(fadeOut, duration)
  }
  /**
   * Hide each elements
   * @see {@link effects/hide}
   * @return {Collection} Collection containing elements
   */
  hide () {
    return this.each(hide)
  }
  /**
   * Show each elements
   * @see {@link effects/show}
   * @return {Collection} Collection containing elements
   */
  show () {
    return this.each(show)
  }
  /**
   * Attach an event handler function for each elements
   * @see {@link events/on}
   * @param {string} eventName
   * @param {Function} eventHandler
   * @return {Collection} Collection containing elements
   */
  on (eventName, eventHandler) {
    return this.each(on, eventName, eventHandler)
  }
  /**
   * Remove an event handler function for each elements
   * @see {@link events/off}
   * @param {string} eventName
   * @param {Function} eventHandler
   * @return {Collection} Collection containing elements
   */
  off (eventName, eventHandler) {
    return this.each(off, eventName, eventHandler)
  }
  /**
   * Execute all handlers to each elements
   * @see {@link events/trigger}
   * @param {string} eventName
   * @param {Object} data
   * @return {Collection} Collection containing elements
   */
  trigger (eventName, data) {
    return this.each(trigger, eventName, data)
  }
  /**
   * Returns a collection of matched elements either found in the DOM based on passed argument
   * @see {@link selectors/find}
   * @param {(string|Element)} selectorOrElement Accepts a string containing a CSS selector which is then used to match a set of elements, or an Element
   * @return {Collection} Collection containing elements
   */
  find (selectorOrElement) {
    if (selectorOrElement instanceof Element === true) {
      return new Collection(selectorOrElement)
    } else {
      return this.elements
        .map(element => find(selectorOrElement, element))
        .filter(element => element.length || element instanceof Element === true)
        .reduce((accumulator, element) => accumulator.concat(element), [])
        .reduce((accumulator, element) => {
          if (~accumulator.elements.indexOf(element)) {
            return accumulator
          } else {
            accumulator.elements.push(element)
            return accumulator
          }
        }, new Collection())
    }
  }
}
