/***
 * GaspardElements Module
 * @module gaspardElements
 */

import { css } from './attributes'
import { find } from './selectors'

/**
 * Use GaspardElements class to perform actions on Elements collection
 *
 * @param {(Element[]|Element|string)} [elements=[]] DOM Elements, Element, or string to query the DOM
 */
export default class GaspardElements {
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
  css (ruleName, value) {
    this.elements.forEach(element => css(element, ruleName, value))
    return this
  }
  /**
   * Return a collection of matched elements either found in the DOM based on passed argument
   *
   * @param {string} selector Accepts a string containing a CSS selector which is then used to match a set of elements
   * @return {GaspardElements} A collection of Gaspard Elements to chain actions
   */
  find (selector) {
    return this.elements
      .map(element => find(selector, element).elements)
      .reduce((accumulator, element) => accumulator.concat(element))
      .reduce((accumulator, element) => {
        if (~accumulator.elements.indexOf(element)) {
          return accumulator
        } else {
          accumulator.elements.push(element)
          return accumulator
        }
      }, new GaspardElements())
  }
}
