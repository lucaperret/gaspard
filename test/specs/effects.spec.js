import * as effects from 'src/effects'
/**
 * @jest-environment jsdom
 */
jest.useFakeTimers()

describe('Effects', () => {
  let element
  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })
  afterEach(() => {
    document.body.innerHTML = ''
  })
  test('Fade in', () => {
    element.style.opacity = 1
    effects.fadeIn(element, 100)
    expect(Number(element.style.opacity)).toBeGreaterThanOrEqual(0)
    jest.runAllTimers()
    expect(Number(element.style.opacity)).toBeGreaterThanOrEqual(1)
  })
  test('RAF fade in', () => {
    global.requestAnimationFrame = jest.fn()
    effects.fadeIn(element, 1)
    jest.runAllTimers()
    expect(global.requestAnimationFrame).toBeCalled()
    effects.fadeIn(element)
    jest.runAllTimers()
    expect(global.requestAnimationFrame).toBeCalled()
    delete global.requestAnimationFrame
  })
  test('Fade out', () => {
    element.style.opacity = 0
    effects.fadeOut(element, 100)
    expect(Number(element.style.opacity)).toBeLessThanOrEqual(1)
    jest.runAllTimers()
    expect(Number(element.style.opacity)).toBeLessThanOrEqual(0)
  })
  test('Hide', () => {
    effects.hide(element)
    expect(element.style.display).toBe('none')
  })
  test('Show', () => {
    effects.show(element)
    expect(element.style.display).toBe('')
  })
})
