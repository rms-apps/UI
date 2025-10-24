/* eslint-disable @typescript-eslint/no-require-imports */

/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    './App.tsx',
    './app/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
    path.resolve(__dirname, '../../packages/*/src/**/*.{js,ts,jsx,tsx}'),
  ],
  presets: [require('nativewind/preset')],
  theme: { extend: {} },
  plugins: [],
};
