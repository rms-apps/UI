import { ColorName, Theme } from '../types';

export const DEFAULT_COLORS: Record<Theme, Record<ColorName, string>> = {
  light: {
    text_primary: '#111827',
    text_secondary: '#6B7280',
    text_tertiary: '#94A3B8',
  },
  dark: {
    text_primary: '#E6ECF3',
    text_secondary: '#A5B4CB',
    text_tertiary: '#7085A1',
  },
};
