/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', // remove if you're not using TypeScript
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // remove if not using React
    },
  },
  settings: {
    react: {
      version: 'detect', // remove if not using React
    },
  },
  plugins: [
    'react', // remove if not using React
    '@typescript-eslint', // remove if not using TypeScript
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // remove if not using TypeScript
    'plugin:react/recommended', // remove if not using React
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off', // optional: if using React 17+
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
  ignorePatterns: ['dist/', 'node_modules/'],
};
