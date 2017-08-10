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
    expect(element.style.opacity).toBe('0')
    jest.runAllTimers()
    expect(Number(element.style.opacity)).toBeGreaterThanOrEqual(1)
  })
  test('RAF fade in', () => {
    window.requestAnimationFrame = jest.fn(fn => setTimeout(fn, 1))
    effects.fadeIn(element, 1)
    jest.runAllTimers()
    expect(window.requestAnimationFrame).toBeCalled()
    effects.fadeIn(element)
    jest.runAllTimers()
    expect(window.requestAnimationFrame).toBeCalled()
    delete window.requestAnimationFrame
  })
  test('Fade out', () => {
    element.style.opacity = 0
    effects.fadeOut(element, 100)
    expect(element.style.opacity).toBe('1')
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
