import Collection from 'src/collection'

const attributes = require('src/attributes')
const content = require('src/content')
const effects = require('src/effects')
const events = require('src/events')
const selectors = require('src/selectors')
/**
 * @jest-environment jsdom
 */
describe('Collection', () => {
  let elements = []
  let collection
  const commonClass = 'commonClass'
  beforeEach(() => {
    [
      ['span'],
      ['div']
    ].forEach(([tag, className]) => {
      const element = document.createElement(tag)
      element.className += commonClass
      document.body.appendChild(element)
      elements.push(element)
    })
    collection = new Collection(elements)
  })
  afterEach(() => {
    elements = []
    collection = null
    document.body.innerHTML = ''
  })
  describe('Initialisation', () => {
    test('Array of elements', () => {
      expect(collection).toBeInstanceOf(Collection)
      expect(collection.elements).toBeInstanceOf(Array)
      expect(collection.elements.length).toBe(elements.length)
    })
    test('An element', () => {
      const collection = new Collection(elements[0])
      expect(collection.elements.length).toBe(1)
    })
    test('Class name', () => {
      const collection = new Collection('.' + commonClass)
      expect(collection.elements.length).toBe(elements.length)
    })
  })
  test('Execute method', () => {
    const method = jest.fn()
    const myParam2 = 2
    collection.each(method, 'myParam1', myParam2)
    expect(method).toHaveBeenCalledTimes(2)
    expect(method).toHaveBeenLastCalledWith(elements[1], 'myParam1', myParam2)
  })
  describe('Find', () => {
    const find = jest.spyOn(selectors, 'find')
    test('Existing', () => {
      collection.elements[0].appendChild(document.createElement('p'))
      const newCollection = collection.find('.commonClass p')
      expect(find).toHaveBeenLastCalledWith('.commonClass p', elements[1])
      expect(newCollection).toBeInstanceOf(Collection)
      expect(newCollection.elements.length).toBe(1)
    })
    test('Existing element', () => {
      const paragraph = document.createElement('p')
      const newCollection = collection.find(paragraph)
      expect(newCollection).toBeInstanceOf(Collection)
      expect(newCollection.elements.length).toBe(1)
    })
    test('Unexisting', () => {
      const newCollection = collection.find('#testId')
      expect(newCollection.elements.length).toBe(0)
    })
    test('Already exist child', () => {
      collection.elements[0].appendChild(document.createElement('p'))
      const newCollection = new Collection([elements[0], elements[0].children[0].parentNode])
      expect(newCollection.find('p').elements.length).toBe(1)
    })
  })
  test('Add class', () => {
    const addClass = jest.spyOn(attributes, 'addClass')
    collection.addClass('myClass')
    expect(addClass).toHaveBeenLastCalledWith(elements[1], 'myClass')
  })
  test('Remove class', () => {
    const removeClass = jest.spyOn(attributes, 'removeClass')
    collection.each(element => {
      element.className += 'customClass'
    })
    collection.removeClass('myClass')
    expect(removeClass).toHaveBeenLastCalledWith(elements[1], 'myClass')
  })
  test('Toggle class', () => {
    const toggleClass = jest.spyOn(attributes, 'toggleClass')
    collection.toggleClass('myClass2')
    expect(toggleClass).toHaveBeenLastCalledWith(elements[1], 'myClass2', undefined)
    collection.toggleClass('myClass2', true)
    expect(toggleClass).toHaveBeenLastCalledWith(elements[1], 'myClass2', true)
  })
  test('Attribute', () => {
    const attr = jest.spyOn(attributes, 'attr')
    collection.attr('myAttr')
    expect(attr).toHaveBeenLastCalledWith(elements[1], 'myAttr', undefined)
    collection.attr('myAttr', true)
    expect(attr).toHaveBeenLastCalledWith(elements[1], 'myAttr', true)
  })
  test('CSS', () => {
    const css = jest.spyOn(attributes, 'css')
    collection.css('color', 'red')
    expect(css).toHaveBeenLastCalledWith(elements[1], 'color', 'red')
  })
  test('Before', () => {
    const before = jest.spyOn(content, 'before')
    collection.before('<img />')
    expect(before).toHaveBeenLastCalledWith(elements[1], '<img />')
  })
  test('After', () => {
    const after = jest.spyOn(content, 'after')
    collection.after('<img />')
    expect(after).toHaveBeenLastCalledWith(elements[1], '<img />')
  })
  test('Prepend', () => {
    const prepend = jest.spyOn(content, 'prepend')
    const img = document.createElement('img')
    collection.prepend(img)
    expect(prepend).toHaveBeenLastCalledWith(elements[1], img)
  })
  test('Append', () => {
    const append = jest.spyOn(content, 'append')
    const img = document.createElement('img')
    collection.append(img)
    expect(append).toHaveBeenLastCalledWith(elements[1], img)
  })
  test('Remove', () => {
    const remove = jest.spyOn(content, 'remove')
    collection.remove()
    expect(remove).toHaveBeenLastCalledWith(elements[1])
  })
  test('Text', () => {
    const text = jest.spyOn(content, 'text')
    collection.text('textTest')
    expect(text).toHaveBeenLastCalledWith(elements[1], 'textTest')
  })
  test('Html', () => {
    const html = jest.spyOn(content, 'html')
    collection.html('htmlTest')
    expect(html).toHaveBeenLastCalledWith(elements[1], 'htmlTest')
  })
  test('Replace with', () => {
    const replaceWith = jest.spyOn(content, 'replaceWith')
    collection.replaceWith('<img />')
    expect(replaceWith).toHaveBeenLastCalledWith(elements[1], '<img />')
  })
  test('Fade in', () => {
    const fadeIn = jest.spyOn(effects, 'fadeIn')
    collection.fadeIn(200)
    expect(fadeIn).toHaveBeenLastCalledWith(elements[1], 200)
  })
  test('Fade out', () => {
    const fadeOut = jest.spyOn(effects, 'fadeOut')
    collection.fadeOut(200)
    expect(fadeOut).toHaveBeenLastCalledWith(elements[1], 200)
  })
  test('Show', () => {
    const show = jest.spyOn(effects, 'show')
    collection.show()
    expect(show).toHaveBeenLastCalledWith(elements[1])
  })
  test('Hide', () => {
    const hide = jest.spyOn(effects, 'hide')
    collection.hide()
    expect(hide).toHaveBeenLastCalledWith(elements[1])
  })
  test('On', () => {
    const on = jest.spyOn(events, 'on')
    const handler = jest.fn()
    collection.on('click', handler)
    expect(on).toHaveBeenLastCalledWith(elements[1], 'click', handler)
  })
  test('Off', () => {
    const off = jest.spyOn(events, 'off')
    const handler = jest.fn()
    collection.off('click', handler)
    expect(off).toHaveBeenLastCalledWith(elements[1], 'click', handler)
  })
  test('Trigger', () => {
    const trigger = jest.spyOn(events, 'trigger')
    const data = {}
    collection.trigger('click', data)
    expect(trigger).toHaveBeenLastCalledWith(elements[1], 'click', data)
  })
})
