module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard', // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  plugins: [
    'jest'
  ],
  rules: { // add your custom rules here
    'arrow-parens': 0, // allow paren-less arrow functions
    'generator-star-spacing': 0, // allow async-await
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
    indent: [2, 2]
  },
  env: {
    browser: true,
    'jest/globals': true
  }
}
