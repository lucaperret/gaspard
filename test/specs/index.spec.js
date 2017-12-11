import * as Gaspard from 'src'

describe('Entry', () => {
  test('Contain exposed methods', () => {
    expect(Gaspard).toEqual(expect.objectContaining({
      find: expect.any(Function),
      is: expect.any(Function),
      contains: expect.any(Function),
      prev: expect.any(Function),
      next: expect.any(Function),
      siblings: expect.any(Function),
      parent: expect.any(Function),
      hasClass: expect.any(Function),
      addClass: expect.any(Function),
      removeClass: expect.any(Function),
      toggleClass: expect.any(Function),
      attr: expect.any(Function),
      css: expect.any(Function),
      fadeIn: expect.any(Function),
      fadeOut: expect.any(Function),
      hide: expect.any(Function),
      show: expect.any(Function),
      viewportPosition: expect.any(Function),
      offset: expect.any(Function),
      position: expect.any(Function),
      outerHeight: expect.any(Function),
      outerWidth: expect.any(Function),
      off: expect.any(Function),
      on: expect.any(Function),
      trigger: expect.any(Function),
      documentReady: expect.any(Function)
    }))
  })
})
