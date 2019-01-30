const { COVERAGE } = process.env

const commonConfig = {
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(css|jpg|png|svg)$': '<rootDir>/src/utils/blank.js',
    setupTestFrameworkScriptFile: '<rootDir>/src/utils/adaptor.js',
  },
  setupFiles: ['jest-localstorage-mock'],
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  verbose: true,
}

const coverage = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
    '!src/**/wrapper.js',
    '!src/**/Wrapper.js',
    '!src/__mocks__',
    '!src/resources',
    '!src/App.js',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage/',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}

const jestConfig =
  COVERAGE === 'true' ? { ...commonConfig, coverage } : commonConfig

module.exports = jestConfig
