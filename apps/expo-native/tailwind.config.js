/* eslint-disable @typescript-eslint/no-require-imports */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './App.tsx',
    './app/**/*.{js,tsx,ts,jsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
    '../../packages/ModalWrapper/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ThemedButton/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ThemedCheckbox/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ThemedDivider/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ThemedRadio/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ThemedSwitch/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ThemedText/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ThemedToast/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ThemedView/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
