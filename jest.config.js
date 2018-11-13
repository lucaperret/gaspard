module.exports = {
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
  collectCoverageFrom: ['**/*.js', '!**/node_modules/**']
}
