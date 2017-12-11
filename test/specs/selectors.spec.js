import * as selectors from 'src/selectors'
/**
 * @jest-environment jsdom
 */
describe('Selectors', () => {
  let element
  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
    document.body.appendChild(element)
  })
  afterEach(() => {
    document.body.innerHTML = ''
  })
  describe('Finding elements', () => {
    test('Throw on missing selector', () => {
      expect(() => selectors.find('')).toThrow()
    })
    test('Throw on passing wrong context', () => {
      expect(() => selectors.find('.toFind', false)).toThrow('You should provide a valid dom node as second argument')
    })
    test('By Id', () => {
      element.id = 'toFind'
      expect(selectors.find('#toFind')).toBe(element)
      expect(selectors.find('#notToFind')).toEqual([])
    })
    test('By class name', () => {
      const span = document.createElement('span')
      span.classList.add('toFind')
      document.body.appendChild(span)
      element.classList.add('toFind')
      expect(selectors.find('.toFind').length).toEqual(2)
    })
    test('By tag name', () => {
      const img = document.createElement('img')
      element.appendChild(img)
      expect(selectors.find('img')).toContain(img)
    })
    test('By attribute', () => {
      element.setAttribute('tofind', true)
      expect(selectors.find('[tofind=true]')).toContain(element)
    })
  })
  describe('Matches a given selector or element', () => {
    test('Selector', () => {
      element.classList.add('toMatch')
      expect(selectors.is(element, '.toMatch')).toBeTruthy()
      element.matches = element.matchesSelector = element.msMatchesSelector = element.mozMatchesSelector = element.webkitMatchesSelector = element.oMatchesSelector = undefined
      expect(() => selectors.is(element, '.toMatch')).toThrow(TypeError)
    })
    test('Element', () => {
      expect(selectors.is(element, element)).toBeTruthy()
    })
  })
  test('Contains child', () => {
    const child = document.createElement('span')
    element.appendChild(child)
    expect(selectors.contains(element, child)).toBeTruthy()
    element.removeChild(child)
    expect(selectors.contains(element, child)).toBeFalsy()
  })
  test('Preceding sibling', () => {
    const precedingElement = document.createElement('div')
    document.body.insertBefore(precedingElement, document.body.firstChild)
    expect(selectors.prev(element)).toBe(precedingElement)
  })
  test('Following sibling', () => {
    const followingElement = document.createElement('div')
    document.body.appendChild(followingElement)
    expect(selectors.next(element)).toBe(followingElement)
  })
  test('Siblings', () => {
    const children = ['img', 'span'].map(child => {
      child = document.createElement(child)
      document.body.appendChild(child)
      return child
    })
    expect(selectors.siblings(element)).toEqual(expect.arrayContaining(children))
  })
  test('Parent', () => {
    expect(selectors.parent(element)).toBe(document.body)
  })
})
