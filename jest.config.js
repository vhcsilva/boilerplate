module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.ts(x)',
    '!components/**/stories.tsx',
    'pages/**/*.ts(x)',
    'styles/**/*.ts(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
