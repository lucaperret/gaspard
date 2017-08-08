import * as selectors from 'src/selectors'
/**
 * @jest-environment jsdom
 */
describe('Selectors', () => {
  test('Following sibling', () => {
    const element = document.createElement('div')
    const followingElement = document.createElement('div')
    document.body.appendChild(element)
    document.body.appendChild(followingElement)
    expect(selectors.next(element)).toBe(followingElement)
  })
  test('Preceding sibling', () => {
    const element = document.createElement('div')
    const precedingElement = document.createElement('div')
    document.body.appendChild(precedingElement)
    document.body.appendChild(element)
    expect(selectors.prev(element)).toBe(precedingElement)
  })
})
