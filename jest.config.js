module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  roots: [
    '<rootDir>/src/',
    '<rootDir>/test/'
  ],
  moduleNameMapper: {
    'src': '<rootDir>/src'
  },
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'test/coverage'
}
