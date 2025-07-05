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
  }
};

export default config;