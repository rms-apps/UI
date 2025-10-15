import { DEFAULT_COLORS } from '../constants/colors';
import { ColorName, Theme, THEME } from '../types';

export type ColorsShape = Record<string, string> & {
  [key: string]: string;
};

type CustomColor = {
  light?: string;
  dark?: string;
};

type UseThemeColorOptions = {
  theme?: Theme;
  colors?: Record<Theme, Record<ColorName, string>>;
};

export const useThemeColor = ({
  customColor,
  options,
  colorName,
}: {
  colorName: ColorName;
  customColor?: CustomColor;
  options?: UseThemeColorOptions;
}): string => {
  const { theme: propTheme, colors: propColors } = options || {};

  const theme = propTheme || THEME.LIGHT;
  const colors = propColors || DEFAULT_COLORS;

  const colorFromProps = customColor?.[theme];
  if (colorFromProps) return colorFromProps;

  return colors[theme][colorName] || '#000000';
};
