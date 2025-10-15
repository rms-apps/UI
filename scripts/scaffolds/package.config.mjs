// @ts-check
export const packageScope = '@rms-apps';
export const packagePrefix = 'ui';

/**
 * Function to create package.json
 *
 * @param {Object} option - Option object
 * @param {string} option.packageName - Name of the package
 */
export function createPackageJson({ packageName }) {
  return {
    name: `${packageScope}/${packagePrefix}-${packageName}`,
    version: '0.0.0',
    description: `RMS-APPS/UI ${
      packageName.charAt(0).toUpperCase() + packageName.toLowerCase().slice(1)
    } Component`,
    keywords: [],
    author: 'Rishi Mishra',
    homepage: `https://github.com/rms-apps/ui/tree/main/packages/${packageName}#readme`,
    license: 'ISC',
    main: 'dist/index.js',
    type: 'module',
    source: 'src/index.ts',
    files: ['dist', 'src'],
    sideEffects: ['*.css', '*.jpg', '*.png', '*.webp', '*.mp4'],
    directories: {
      lib: 'dist',
      test: '__tests__',
    },
    dependencies: {
      classnames: '^2.3.2',
      '@rms-apps/ui-utils': 'workspace:*',
    },
    peerDependencies: {
      react: '^18.2.0',
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
    sass: {
      includePaths: ['./node_modules'],
    },
    scripts: {
      build: 'node ../../scripts/build/build.mjs',
    },
    browserslist: '>0.1% in ID, not dead',
  };
}
