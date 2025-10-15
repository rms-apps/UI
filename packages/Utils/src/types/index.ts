export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ColorName = string;

export type Theme = (typeof THEME)[keyof typeof THEME];
