export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ColorName = string;
export type ColorValue = string | undefined;
export type Theme = (typeof THEME)[keyof typeof THEME];
export type ThemeColor = Record<Theme, ColorValue>;
export type ThemePalette = Record<Theme, Record<ColorName, ColorValue>>;

export type PasswordRules = {
  minLength: number;
  minUpperCase: number;
  minLowerCase: number;
  minSpecialChars: number;
};

export type LinearGradientColors = readonly [string, string, ...string[]];
