import { useThemeColor } from '@rms-apps/ui-utils';
import { Text, StyleSheet, TextProps, Platform } from 'react-native';

export interface ThemedTextProps extends TextProps {
  darkColor?: string;
  lightColor?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'h1' | 'h2' | 'h3' | 'b1' | 'b2' | 'b3' | 'sm';
  weight?: 'bold' | 'semibold' | 'normal' | 'regular' | 'thin';
}

export const ThemedText = ({
  size = 'b2',
  align = 'left',
  weight = 'regular',
  variant = 'primary',
  darkColor,
  lightColor,
  style,
  ...rest
}: ThemedTextProps) => {
  const fontColor = useThemeColor({
    name: `text_${variant}`,
    customColor: { light: lightColor, dark: darkColor },
  });

  return (
    <Text
      {...rest}
      style={[
        styles.base,
        styles[size],
        styles[weight],
        { color: fontColor, textAlign: align },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  b1: { fontSize: 16, lineHeight: 24 },

  b2: { fontSize: 14, lineHeight: 22 },
  b3: { fontSize: 12, lineHeight: 18 },
  base: {
    paddingVertical: 2,
    ...(Platform.OS === 'android' && {
      includeFontPadding: false,
    }),
  },

  bold: { fontWeight: '700' },
  h1: { fontSize: 36, lineHeight: 52 },
  h2: { fontSize: 22, lineHeight: 32 },

  h3: { fontSize: 18, lineHeight: 26 },

  normal: { fontWeight: '500' },
  regular: { fontWeight: '400' },
  semibold: { fontWeight: '600' },
  sm: { fontSize: 10, lineHeight: 16 },
  thin: { fontWeight: '300' },
});
