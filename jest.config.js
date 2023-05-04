module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transformIgnorePatterns: ['node_modules/(?!axios.*)'],
  moduleNameMapper: {
    'react-markdown': '<path>/mocks/react-markdown.js',
  },
};
