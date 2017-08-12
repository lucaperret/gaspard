/***
 * Utils Module
 * @module utils
 */

/**
 * Transform kebab case string into camel case strings array
 *
 * @param {string} kebabCaseString The kebab case string
 * @return {string} The camel case transformed string
 */
export function toCamelCase (kebabCaseString) {
  return kebabCaseString.split('-').reduce((memo, token) => {
    return memo + token.slice(0, 1).toUpperCase() + token.slice(1)
  })
}

/**
 * Filter incorrect class names.
 *
 * @param {string} [classNames=''] One or more space-separated classes to be filtered
 * @return {Array} Valid class names array
 */
export function getRealClassNamesArray (classNames = '') {
  return classNames.split(' ').filter(className => !!className)
}
