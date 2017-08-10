import * as attributes from 'src/attributes'
/**
 * @jest-environment jsdom
 */
describe('Attributes', () => {
  let element
  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })
  afterEach(() => {
    document.body.innerHTML = ''
  })
  describe('Classes', () => {
    test('Has', () => {
      element.classList.add('hasClass')
      expect(attributes.hasClass(element, 'hasClass')).toBeTruthy()
      deleteClassList(element)
      element.className += ' hasClass'
      expect(attributes.hasClass(element, 'hasClass')).toBeTruthy()
    })
    test('Add', () => {
      attributes.addClass(element, 'hasClass')
      expect(element.classList.contains('hasClass')).toBeTruthy()
      deleteClassList(element)
      attributes.addClass(element, 'hasClass')
      expect(!!~element.className.indexOf('hasClass')).toBeTruthy()
    })
    test('Add severals', () => {
      attributes.addClass(element, 'hasClass1 hasClass2')
      expect(element.className).toEqual(expect.stringContaining('hasClass1 hasClass2'))
    })
    test('Add without valid class name', () => {
      attributes.addClass(element, '      ')
      expect(element.className).toBe('')
      attributes.addClass(element)
      expect(element.className).toBe('')
    })
    test('Remove', () => {
      element.classList.add('hasClass')
      expect(element.classList.contains('hasClass')).toBeTruthy()
      attributes.removeClass(element, 'hasClass')
      expect(element.classList.contains('hasClass')).toBeFalsy()
      element.classList.add('hasClass')
      expect(element.classList.contains('hasClass')).toBeTruthy()
      deleteClassList(element)
      attributes.removeClass(element, 'hasClass')
      expect(!!~element.className.indexOf('hasClass')).toBeFalsy()
    })
    test('Toggle', () => {
      attributes.toggleClass(element, 'hasClass', true)
      expect(element.classList.contains('hasClass')).toBeTruthy()
      attributes.toggleClass(element, 'hasClass', false)
      expect(element.classList.contains('hasClass')).toBeFalsy()
      attributes.toggleClass(element, 'hasClass')
      expect(element.classList.contains('hasClass')).toBeTruthy()
      attributes.toggleClass(element, 'hasClass')
      expect(element.classList.contains('hasClass')).toBeFalsy()
    })
  })
  test('Attribute', () => {
    attributes.attr(element, 'setAttr', true)
    expect(element.getAttribute('setAttr')).toBe('true')
    attributes.attr(element, 'setAttr', null)
    expect(element.getAttribute('setAttr')).toBeNull()
    element.setAttribute('setAttr', true)
    expect(attributes.attr(element, 'setAttr')).toBe('true')
  })
  test('CSS', () => {
    attributes.css(element, 'color', 'red')
    expect(getComputedStyle(element).color).toBe('red')
    expect(attributes.css(element, 'color')).toBe('red')
  })
})

function deleteClassList (element) {
  Object.defineProperty(element, 'classList', {
    get () {
      return undefined
    }
  })
}
