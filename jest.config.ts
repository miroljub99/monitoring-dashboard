import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.app.json'
    }
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
  "^@/(.*)$": "<rootDir>/src/$1",
  '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/_mocks_/fileMock.js',
 },
 setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;