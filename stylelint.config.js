module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-tailwindcss',
  ],
  rules: {
    // Ignore Tailwind directives like @tailwind, @layer, @apply
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'layer',
          'screen',
        ],
      },
    ],

    // CSS modules :global()
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'export'] },
    ],

    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
      { message: 'Expected class selector to be snake_case' },
    ],

    'scss/dollar-variable-pattern': null,
    'custom-property-pattern': null,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: ['inset'] },
    ],
    'media-feature-range-notation': null,
  },
  ignoreFiles: ['**/*/dist/**/*.css'],
};
