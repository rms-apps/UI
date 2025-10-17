import baseConfig from '../../eslint.config.mjs';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').FlatConfig[]} */
export default [
  { ignores: ['node_modules/**', 'dist/**', '**/*.d.ts'] },
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Package-specific overrides
    },
  },
];
