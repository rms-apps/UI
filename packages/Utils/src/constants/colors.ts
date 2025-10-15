import { ColorName, Theme } from '../types';

export const DEFAULT_COLORS: Record<Theme, Record<ColorName, string>> = {
  light: {
    primary: '#007AFF',
    secondary: '#FF9500',
    background: '#FFFFFF',
    text: '#000000',
  },
  dark: {
    primary: '#0A84FF',
    secondary: '#FF9F0A',
    background: '#000000',
    text: '#FFFFFF',
  },
};
