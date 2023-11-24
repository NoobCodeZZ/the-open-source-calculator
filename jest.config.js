// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
      // Use babel-jest to transpile tests with the next/babel preset
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    moduleNameMapper: {
      // Handle module aliases (if you are using them in your webpack config)
      '^@/components/(.*)$': '<rootDir>/components/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
  