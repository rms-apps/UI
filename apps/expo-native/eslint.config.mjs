import expoConfig from 'eslint-config-expo/flat.js';
import storybook from 'eslint-plugin-storybook';

/** @type {import('eslint').FlatConfig[]} */
export default [
  ...expoConfig,
  {
    plugins: { storybook },
    rules: {
      'storybook/no-redundant-story-name': 'warn',
    },
    ignores: ['dist', 'build', '.expo', 'android', 'ios'],
  },
];
