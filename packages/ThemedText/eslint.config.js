import baseConfig from '../../eslint.config.mjs';

export default [
  // Ignore generated/build files first
  {
    ignores: ['node_modules/**', 'dist/**', '**/*.d.ts'],
  },

  ...baseConfig,
];
