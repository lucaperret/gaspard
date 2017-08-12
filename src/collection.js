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
   * Apply a method on each elements and return the collection to chain methods
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
   * @see {@link addClass}
   * @param {string} classNames
   * @return {Collection} Collection containing elements
   */
  addClass (classNames) {
    return this.each(addClass, classNames)
  }
  /**
   * Toggle classes to each elements
   * @see {@link toggleClass}
   * @param {string} classNames
   * @param {boolean} state
   * @return {Collection} Collection containing elements
   */
  toggleClass (classNames, state) {
    return this.each(toggleClass, classNames, state)
  }
  /**
   * Remove classes to each elements
   * @see {@link removeClass}
   * @param {string} classNames
   * @return {Collection} Collection containing elements
   */
  removeClass (classNames) {
    return this.each(removeClass, classNames)
  }
  /**
   * Set attribute to each elements
   * @see {@link attr}
   * @param {string} attribute
   * @param {any} value
   * @return {Collection} Collection containing elements
   */
  attr (attribute, value) {
    return this.each(attr, attribute, value)
  }
  /**
   * Set CSS value to each elements
   * @see {@link css}
   * @param {string} ruleName
   * @param {string} value
   * @return {Collection} Collection containing elements
   */
  css (ruleName, value) {
    return this.each(css, ruleName, value)
  }
  /**
   * Insert content before each elements
   * @see {@link before}
   * @param {string} htmlString
   * @return {Collection} Collection containing elements
   */
  before (htmlString) {
    return this.each(before, htmlString)
  }
  /**
   * Insert content after each elements
   * @see {@link after}
   * @param {string} htmlString
   * @return {Collection} Collection containing elements
   */
  after (htmlString) {
    return this.each(after, htmlString)
  }
  /**
   * Prepend element to each elements
   * @see {@link prepend}
   * @param {Element} element
   * @return {Collection} Collection containing elements
   */
  prepend (element) {
    return this.each(prepend, element)
  }
  /**
   * Append element to each elements
   * @see {@link append}
   * @param {Element} element
   * @return {Collection} Collection containing elements
   */
  append (element) {
    return this.each(append, element)
  }
  /**
   * Remove each elements
   * @see {@link remove}
   * @return {Collection} Collection containing elements
   */
  remove () {
    return this.each(remove)
  }
  /**
   * Set text to each elements
   * @see {@link text}
   * @param {string} textString
   * @return {Collection} Collection containing elements
   */
  text (textString) {
    return this.each(text, textString)
  }
  /**
   * Set html to each elements
   * @see {@link html}
   * @param {string} htmlString
   * @return {Collection} Collection containing elements
   */
  html (htmlString) {
    return this.each(html, htmlString)
  }
  /**
   * Replace each elements
   * @see {@link replaceWith}
   * @param {string} htmlString
   * @return {Collection} Collection containing elements
   */
  replaceWith (htmlString) {
    return this.each(replaceWith, htmlString)
  }
  /**
   * Fade in each elements
   * @see {@link fadeIn}
   * @param {number} duration
   * @return {Collection} Collection containing elements
   */
  fadeIn (duration) {
    return this.each(fadeIn, duration)
  }
  /**
   * Fade out each elements
   * @see {@link fadeOut}
   * @param {number} duration
   * @return {Collection} Collection containing elements
   */
  fadeOut (duration) {
    return this.each(fadeOut, duration)
  }
  /**
   * Hide each elements
   * @see {@link hide}
   * @return {Collection} Collection containing elements
   */
  hide () {
    return this.each(hide)
  }
  /**
   * Show each elements
   * @see {@link show}
   * @return {Collection} Collection containing elements
   */
  show () {
    return this.each(show)
  }
  /**
   * Attach an event handler function for each elements
   * @see {@link on}
   * @param {string} eventName
   * @param {Function} eventHandler
   * @return {Collection} Collection containing elements
   */
  on (eventName, eventHandler) {
    return this.each(on, eventName, eventHandler)
  }
  /**
   * Remove an event handler function for each elements
   * @see {@link off}
   * @param {string} eventName
   * @param {Function} eventHandler
   * @return {Collection} Collection containing elements
   */
  off (eventName, eventHandler) {
    return this.each(off, eventName, eventHandler)
  }
  /**
   * Execute all handlers to each elements
   * @see {@link trigger}
   * @param {string} eventName
   * @param {Object} data
   * @return {Collection} Collection containing elements
   */
  trigger (eventName, data) {
    return this.each(trigger, eventName, data)
  }
  /**
   * Return a collection of matched elements either found in the DOM based on passed argument
   *
   * @param {string} selector Accepts a string containing a CSS selector which is then used to match a set of elements
   * @return {Collection} Collection containing elements
   */
  find (selector) {
    return this.elements
      .map(element => find(selector, element))
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
