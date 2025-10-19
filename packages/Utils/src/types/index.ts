export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ColorName = string;

export type Theme = (typeof THEME)[keyof typeof THEME];

export type PasswordRules = {
  minLength: number;
  minUpperCase: number;
  minLowerCase: number;
  minSpecialChars: number;
};

export type LinearGradientColors = readonly [string, string, ...string[]];
