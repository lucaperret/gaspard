module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  modulePaths: [
    'src'
  ],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'test/coverage'
}
