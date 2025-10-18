/* eslint-disable @typescript-eslint/no-require-imports */

const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..'); // root of the monorepo

const config = getDefaultConfig(projectRoot);

// 1️⃣ Include your package source folder so Metro watches it
config.watchFolders = [workspaceRoot];

// 2️⃣ Make sure Metro resolves react/react-native etc. only once (from the app)
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// 3️⃣ Add add transformer for svg files
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

// 4️⃣ Add .ts/.tsx from outside the app (packages)
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg', 'd.ts', 'cjs'],
};

/** withStorybook only */
// module.exports = withStorybook(config);

// Apply NativeWind first, then Storybook
module.exports = withStorybook(
  withNativeWind(config, {
    input: path.join(projectRoot, 'global.css'),
  }),
);