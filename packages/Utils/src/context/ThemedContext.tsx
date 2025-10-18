import { Theme, THEME } from '../types';
import { DEFAULT_COLORS } from '../constants/colors';
import React, { createContext, useContext } from 'react';
import { ColorsMap } from '../customHooks/useThemeColor';

interface ThemeContextValue {
  theme: Theme;
  palette: ColorsMap;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: THEME.LIGHT,
  palette: DEFAULT_COLORS,
});

export const ThemeProvider = ({
  children,
  theme = THEME.LIGHT,
  palette = DEFAULT_COLORS,
}: {
  children: React.ReactNode;
  theme?: Theme;
  palette?: ColorsMap;
}) => (
  <ThemeContext.Provider value={{ theme, palette }}>
    {children}
  </ThemeContext.Provider>
);

export const useThemeContext = () => useContext(ThemeContext);
