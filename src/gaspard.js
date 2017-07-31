import { find } from './selectors'

export default class GaspardElements {
  constructor (els = []) {
    let contextElements
    if (Array.isArray()) {
      contextElements = els
    } else {
      contextElements = typeof els === 'string' ? find(els) : [els]
    }
    this.els = contextElements
  }
  find (selector) {
    return this.els
      .map(element => find(selector, element).els)
      .reduce((accumulator, element) => accumulator.concat(element))
      .reduce((accumulator, element) => {
        if (~accumulator.els.indexOf(element)) {
          return accumulator
        } else {
          accumulator.els.push(element)
          return accumulator
        }
      }, new GaspardElements())
  }
}
