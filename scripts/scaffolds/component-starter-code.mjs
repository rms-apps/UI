// @ts-check
/* eslint-disable no-console */
import util from 'util';
import childProcess from 'child_process';
import fs from 'fs/promises';
import { argv } from 'process';
import path from 'path';

import {
  packageScope,
  packagePrefix,
  createPackageJson,
} from './package.config.mjs';
import { createStorybookFile } from './storybook-template.mjs';
import { createComponentFile } from './component-template.mjs';
import { createReadmeFile } from './readme-template.mjs';

const exec = util.promisify(childProcess.exec);
const relativePath = './packages';
/**
 * Transforms snakeCased string into PascalCase string
 *
 * @param {string} str any string
 * @returns {string}
 */
const snakeToPascalCase = (str) =>
  str
    .split('-')
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join('');

/**
 * Creates Folder and Files for initial component
 *
 * @param {string} packageName name of the package
 */
async function setupFolderStructureAndFiles(packageName) {
  console.log('🗃️  Setting up folders and starter files for you...');
  const pkgDir = `${path.join('./packages', packageName)}`;

  // await exec(
  //   `move ${path.join('./packages', packagePrefix)}-${packageName} ${pkgDir}`,
  // );

  // remove lerna defaults
  // await exec(`rd /s /q ${path.join(pkgDir, '__tests__')}`);
  // await exec(`rd /s /q ${path.join(pkgDir, 'lib')}`);
  // await exec(`del ${path.join(pkgDir, 'README.md')}`);

  await exec(`mkdir  ${path.join(pkgDir, 'src')}`);

  const componentName = snakeToPascalCase(packageName);
  const defaultReadmeFile = 'README.md';
  const rootIndexFile = 'index.ts';
  const defaultIndexFile = 'index.ts';
  const defaultComponentFile = `${componentName}.tsx`;
  const defaultScssFile = `${componentName}.module.scss`;
  const defaultStorybookFile = `${componentName}.stories.tsx`;

  // package-name/index.ts
  const rootIndexFileContent = `export * from './src';`;
  // package-name/src/index.ts
  const defaultIndexFileContent = `  export * from './${componentName}';`;

  const defaultScssFileContent = '.container { padding: 40px; }';
  const defaultReadmeFileContent = createReadmeFile(componentName);
  const defaultComponentFileContent = createComponentFile(componentName);
  const defaultStorybookFileContent = createStorybookFile(componentName);

  await exec(
    `echo ${rootIndexFileContent} > ${path.join(pkgDir, rootIndexFile)}`,
  );
  await exec(
    `echo ${defaultScssFileContent} > ${path.join(
      pkgDir,
      'src',
      defaultScssFile,
    )}`,
  );

  fs.writeFile(path.join(pkgDir, defaultReadmeFile), defaultReadmeFileContent);
  fs.writeFile(
    path.join(pkgDir, 'src', defaultIndexFile),
    defaultIndexFileContent,
  );
  fs.writeFile(
    path.join(pkgDir, 'src', defaultComponentFile),
    defaultComponentFileContent,
  );
  fs.writeFile(
    path.join(pkgDir, 'src', defaultStorybookFile),
    defaultStorybookFileContent,
  );
}

/**
 * Creates and update core configurations
 *
 * @param {string} packageName name of the package
 */
async function setupConfigurations(packageName) {
  console.log('📋 Generating configuration files...');
  const pkgDir = `${path.join(relativePath, packageName)}`;

  const packageJSON = createPackageJson({ packageName });

  // replace Lerna created package.json
  await fs.writeFile(
    `${path.join(pkgDir, 'package.json')}`,
    JSON.stringify(packageJSON, null, 2),
  );
}

/**
 * Extracts mandatory input for scaffolding process based on shell input
 *
 * @param {string[]} shellArgvs node argv value
 * @returns
 */
function getMandatoryInput(shellArgvs) {
  const packageName = shellArgvs[2];

  if (!packageName) {
    throw Error('Package name have to be specified!');
  }

  return packageName;
}

(async function main() {
  try {
    console.error('>>> RMS-APPS 🟡 UI SCAFFOLD <<<\n');
    const packageName = getMandatoryInput(argv);
    await setupFolderStructureAndFiles(packageName);
    await setupConfigurations(packageName);

    console.log('✨ Formatting with prettier...');
    await exec(`npx prettier --write packages/${packageName}`);

    console.log('🛠️  Installing the new package...');
    await exec('pnpm i')
      .then((res) => {})
      .catch((err) => console.log(err));

    console.log(
      `🐉 New package [${packageScope}/${packagePrefix}-${packageName}] is now ready on ./packages/${packageName}`,
    );
    console.log('\n>>> RMS-APPS 🟡 UI SCAFFOLD DONE <<<\n');
  } catch (error) {
    console.error('🟥 ERROR!', error);
  }
})();
