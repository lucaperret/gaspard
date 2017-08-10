import * as content from 'src/content'
/**
 * @jest-environment jsdom
 */
describe('Content', () => {
  let element
  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })
  afterEach(() => {
    document.body.innerHTML = ''
  })
  test('Parse HTML', () => {
    const img = content.parseHTML('<img />')
    expect(img).toBeInstanceOf(HTMLCollection)
    expect(img.length).toBe(1)
    expect(img[0]).toBeInstanceOf(HTMLImageElement)
  })
  describe('Insert', () => {
    test('Before', () => {
      content.before(element, '<img id="before" />')
      expect(document.body.children.length).toBe(2)
      expect(document.body.children[0].id).toBe('before')
    })
    test('After', () => {
      content.after(element, '<img id="after" />')
      expect(document.body.children.length).toBe(2)
      expect(document.body.children[1].id).toBe('after')
    })
    test('Prepend', () => {
      const img = document.createElement('img')
      content.prepend(document.body, img)
      expect(document.body.children.length).toBe(2)
      expect(document.body.children[0]).toBeInstanceOf(HTMLImageElement)
    })
    test('Append', () => {
      const img = document.createElement('img')
      content.append(document.body, img)
      expect(document.body.children.length).toBe(2)
      expect(document.body.children[1]).toBeInstanceOf(HTMLImageElement)
    })
    test('Clone', () => {
      element.id = 'willBeCloned'
      const clonedElement = content.clone(element)
      expect(clonedElement).toEqual(element)
      expect(clonedElement.id).toBe('willBeCloned')
    })
  })
  test('Remove', () => {
    expect(document.body.children.length).toBe(1)
    content.remove(element)
    expect(document.body.children.length).toBe(0)
  })
  test('Text', () => {
    content.text(element, 'isText')
    expect(element.textContent).toBe('isText')
    expect(content.text(element)).toBe('isText')
  })
  test('HTML', () => {
    content.html(element, '<img />')
    expect(element.children[0]).toBeInstanceOf(HTMLImageElement)
    expect(content.html(element)).toBe('<img>')
  })
  test('Replace with HTML', () => {
    content.replaceWith(element, '<img />')
    expect(document.body.children[0]).toBeInstanceOf(HTMLImageElement)
  })
})
