
export function toCamelCase (kebabCaseString) {
  return kebabCaseString.split('-').reduce((memo, token) => {
    return memo + token.slice(0, 1).toUpperCase() + token.slice(1)
  })
}
