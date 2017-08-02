/***
 * Utils Module
 * @module utils
 * @private
 */

/**
 * Transform kebab case string into camel case strings array
 * @private
 *
 * @param {string} kebabCaseString The kebab case string
 * @return {string} The camel case transformed string
 */
export function toCamelCase (kebabCaseString) {
  return kebabCaseString.split('-').reduce((memo, token) => {
    return memo + token.slice(0, 1).toUpperCase() + token.slice(1)
  })
}
