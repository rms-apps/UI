import { useThemeContext } from '../context/ThemedContext';
import {
  ColorName,
  Theme,
  THEME,
  ColorValue,
  ThemeColor,
  ThemePalette,
} from '../types';

/**
 * Represents a complete color palette for all themes.
 * Each theme (light/dark) maps to a set of named colors.
 */
export type ColorsMap = Record<Theme, Record<ColorName, ColorValue>>;

/**
 * Parameters for retrieving a theme-aware color.
 */
export type UseThemeColorParams = {
  name: ColorName;
  theme?: Theme;
  customColor?: ThemeColor;
  palette?: ThemePalette;
};

/**
 * Returns a color value for the given theme.
 * If no theme/palette is provided, uses global context values.
 */
export const useThemeColor = ({
  name,
  customColor,
  theme: propTheme,
  palette: propPalette,
}: UseThemeColorParams): string => {
  const { theme: ctxTheme, palette: ctxPalette } = useThemeContext();

  const theme = propTheme || ctxTheme || THEME.LIGHT;
  const palette = propPalette || ctxPalette;

  const overriddenColor = customColor?.[theme];
  if (overriddenColor) return overriddenColor;

  return palette[theme][name] || '#000000';
};
