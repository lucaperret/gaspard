import * as positions from 'src/positions'
/**
 * @jest-environment jsdom
 */

describe('Positions', () => {
  let element
  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })
  afterEach(() => {
    document.body.innerHTML = ''
  })
  test('On viewport', () => {
    const rect = element.getBoundingClientRect()
    expect(positions.viewportPosition(element)).toEqual({
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width
    })
  })
  test('Offset', () => {
    const rect = element.getBoundingClientRect()
    expect(positions.offset(element)).toEqual({
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    })
  })
  test('Position', () => {
    expect(positions.position(element)).toEqual({
      top: element.offsetTop,
      left: element.offsetLeft
    })
  })
  test('Outer height', () => {
    element.style.marginTop = '2px'
    expect(positions.outerHeight(element)).toEqual(element.offsetHeight)
    expect(positions.outerHeight(element, true)).toEqual(element.offsetHeight + 2)
  })
  test('Outer height with margins', () => {
    expect(positions.outerHeight(element, true)).toEqual(element.offsetHeight)
  })
  test('Outer width', () => {
    element.style.marginLeft = '2px'
    element.style.marginRight = '2px'
    expect(positions.outerWidth(element)).toEqual(element.offsetWidth)
    expect(positions.outerWidth(element, true)).toEqual(element.offsetWidth + 4)
  })
  test('Outer width with margins', () => {
    expect(positions.outerWidth(element, true)).toEqual(element.offsetWidth)
  })
})
