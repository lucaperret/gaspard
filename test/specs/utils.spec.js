import * as utils from 'src/utils'

describe('Utils', () => {
  test('Kebab to camel case', () => {
    expect(utils.toCamelCase('kebab-case-string')).toBe('kebabCaseString')
  })
})
