module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  roots: [
    '<rootDir>/src/',
    '<rootDir>/test/specs/'
  ],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/$1'
  },
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'test/coverage',
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: ['!src/index.js', '**/*.js', '!**/node_modules/**']
}
