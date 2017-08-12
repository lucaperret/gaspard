import * as utils from 'src/utils'

describe('Utils', () => {
  test('Kebab to camel case', () => {
    expect(utils.toCamelCase('kebab-case-string')).toBe('kebabCaseString')
  })
  test('Filter incorrect class names', () => {
    expect(utils.getRealClassNamesArray('  class1       class2 ')).toEqual(['class1', 'class2'])
  })
})
