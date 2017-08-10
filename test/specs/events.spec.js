import * as events from 'src/events'
/**
 * @jest-environment jsdom
 */

describe('Events', () => {
  let element
  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })
  afterEach(() => {
    document.body.innerHTML = ''
  })
  test('On', () => {
    const handler = jest.fn()
    events.on(element, 'click', handler)
    element.dispatchEvent(new CustomEvent('click'))
    expect(handler).toBeCalled()
  })
  test('Off', () => {
    const handler = jest.fn()
    element.addEventListener('click', handler)
    events.off(element, 'click', handler)
    element.dispatchEvent(new CustomEvent('click'))
    expect(handler).not.toBeCalled()
  })
  test('Trigger', () => {
    const handler = jest.fn()
    element.addEventListener('click', handler)
    events.trigger(element, 'click')
    expect(handler).toBeCalled()
  })
  test('Trigger with data', () => {
    const handler = jest.fn()
    element.addEventListener('click', handler)
    events.trigger(element, 'click', { isArg: true })
    expect(handler.mock.calls[0][0]).toEqual(expect.objectContaining({ detail: { isArg: true } }))
  })
  test('Trigger with createEvent', () => {
    const customEventFn = window.CustomEvent
    window.CustomEvent = undefined
    const handler = jest.fn()
    element.addEventListener('click', handler)
    events.trigger(element, 'click')
    expect(handler).toBeCalled()
    window.CustomEvent = customEventFn
  })
  describe('Document ready', () => {
    afterEach(() => {
      Object.defineProperty(global.document, 'readyState', {
        value: 'complete',
        writable: true
      })
    })
    test('On DOMContentLoaded', () => {
      Object.defineProperty(global.document, 'readyState', {
        value: 'loading',
        writable: true
      })
      const handler = jest.fn()
      events.documentReady(handler)
      document.dispatchEvent(new CustomEvent('DOMContentLoaded'))
      expect(handler).toBeCalled()
    })
    test('Already loaded', () => {
      const handler = jest.fn()
      events.documentReady(handler)
      expect(handler).toBeCalled()
    })
    test('Already loaded attachEvent', () => {
      global.document.attachEvent = true
      const handler = jest.fn()
      events.documentReady(handler)
      expect(handler).toBeCalled()
      global.document.attachEvent = undefined
    })
  })
})
