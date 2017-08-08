import * as selectors from 'src/selectors'
/**
 * @jest-environment jsdom
 */
describe('Selectors', () => {
  test('Following element sibling', () => {
    const element = document.createElement('div')
    const followingElement = document.createElement('div')
    document.body.appendChild(element)
    document.body.appendChild(followingElement)
    expect(selectors.next(element)).toBe(followingElement)
  })
})
