import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import prettier from 'eslint-config-prettier/flat';
import jsxa11y from 'eslint-plugin-jsx-a11y';

/** @type {import('eslint').FlatConfig[]} */
export default [
  prettier, // Prettier at the top
  {
    files: ['**/*.{ts,tsx,js,jsx,stories.ts,stories.tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react,
      'react-hooks': reactHooks,
      'react-native': reactNative,
      'jsx-a11y': jsxa11y,
    },
    rules: {
      // Merge recommended rules manually
      ...tsPlugin.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactNative.configs.all.rules,
      ...jsxa11y.configs.recommended.rules,

      // Your custom shared rules
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react-native/sort-styles': 'warn',
      'react/jsx-props-no-spreading': 0,
      'react/prop-types': 0,
      'no-use-before-define': 0,
      'react-native/no-color-literals': 0,
      'import/extensions': 0,
      'react/button-has-type': 0,
      'react-native/no-inline-styles': 0,
      'react/react-in-jsx-scope': 0,
      'import/prefer-default-export': 0,
      'react/require-default-props': 0,
      'react-native/no-unused-styles': 0,
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: true, variables: false },
      ],
      'react/function-component-definition': 0,
      // Disable the base `no-shadow` rule as it can report incorrect errors in typescript
      // Enable `@typescript-eslint/no-shadow`
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.ts', '.jsx', '.tsx'] },
      ],
      // Disabled, we only require label to nest input OR use htmlFor
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/b800f40a2a69ad48015ae9226fbe879f946757ed/docs/rules/label-has-associated-control.md
      'jsx-a11y/label-has-associated-control': [
        'off',
        {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: 'both',
          depth: 25,
        },
      ],
      // Require that Labels nest their input or uses htmlFor
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
      'jsx-a11y/label-has-for': [
        'error',
        {
          components: [],
          required: {
            some: ['nesting', 'id'],
          },
          allowChildren: false,
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
      'react-native': {
        allowedComponents: ['ThemedText'],
      },
    },
    ignores: [
      'node_modules/**',
      'apps/*/dist/**',
      'apps/*/node_modules/**',
      'apps/expo-native/.expo/**',
      'apps/expo-native/android/**',
      'apps/expo-native/ios/**',
      'apps/expo-native/stories/**',
    ],
  },
];
