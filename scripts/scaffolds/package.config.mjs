// @ts-check
export const packageScope = '@rms-apps';
export const packagePrefix = 'ui';

/**
 * Transforms snakeCased string into PascalCase string
 *
 * @param {string} str any string
 * @returns {string}
 */
export const pascalToKebab = (str) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
};

/**
 * Function to create package.json
 *
 * @param {Object} option - Option object
 * @param {string} option.packageName - Name of the package
 */
export function createPackageJson({ packageName }) {
  return {
    name: `${packageScope}/${packagePrefix}-${pascalToKebab(packageName)}`,
    version: '0.0.0',
    description: `rms-apps/ui-${pascalToKebab(packageName)} component`,
    keywords: [],
    author: 'Rishi Mishra',
    homepage: `https://github.com/rms-apps/ui/tree/main/packages/${packageName}#readme`,
    license: 'ISC',
    main: 'dist/index.js',
    type: 'module',
    source: 'src/index.ts',
    'react-native': 'src/index.ts',
    files: ['dist', 'src'],
    sideEffects: ['*.css', '*.jpg', '*.png', '*.webp', '*.mp4'],
    directories: {
      lib: 'dist',
      test: '__tests__',
    },
    repository: {
      type: 'git',
      url: 'git@github.com:rms-apps/ui.git',
    },
    bugs: {
      url: 'https://github.com/rms-apps/ui/issues',
    },
    publishConfig: {
      access: 'restricted',
    },
    scripts: {
      build: 'tsc -p tsconfig.build.json',
      'copy-assets': 'mkdir -p dist/assets && cp -R src/assets/* dist/assets/',
      lint: 'eslint . --fix --cache',
      'check-types': 'tsc --noEmit',
      clean: 'rm -rf dist',
    },
    peerDependencies: {
      expo: '*',
      react: '*',
      'react-native': '*',
      nativewind: '*',
      'react-native-css-interop': '*',
    },
    devDependencies: {
      eslint: '9.37.0',
      typescript: '5.9.2',
    },
    dependencies: {
      '@rms-apps/ui-utils': 'workspace:*',
    },
  };
}
