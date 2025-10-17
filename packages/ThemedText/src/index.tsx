import { Text, StyleSheet, TextProps } from 'react-native';
import { useThemeColor, DEFAULT_COLORS } from '@rms-apps/ui-utils';

export interface ThemedTextProps extends TextProps {
  weight?: 'bold' | 'semibold' | 'normal' | 'regular' | 'thin';
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'h1' | 'h2' | 'h3' | 'b1' | 'b2' | 'b3' | 'sm';
  lightColor?: string;
  darkColor?: string;
  align?:
    | 'stretch'
    | 'auto'
    | 'baseline'
    | 'center'
    | 'flex-start'
    | 'flex-end';
}

export const ThemedText = ({
  size = 'b2',
  align = 'center',
  weight = 'regular',
  variant = 'primary',
  darkColor,
  lightColor,
  style,
  ...rest
}: ThemedTextProps) => {
  const fontColor = useThemeColor({
    customColor: { light: lightColor, dark: darkColor },
    colorName: `text_${variant}` as keyof typeof DEFAULT_COLORS.light,
  });

  return (
    <Text
      style={[
        styles[size],
        styles[weight],
        { color: fontColor, alignSelf: align },
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  b1: { fontSize: 16, lineHeight: 22 },
  b2: { fontSize: 14, lineHeight: 20 },
  b3: { fontSize: 12, lineHeight: 16 },
  bold: { fontWeight: '700' },
  h1: { fontSize: 36, lineHeight: 40 },
  h2: { fontSize: 22, lineHeight: 28 },
  h3: { fontSize: 18, lineHeight: 24 },
  normal: { fontWeight: '500' },
  regular: { fontWeight: '400' },
  semibold: { fontWeight: '600' },
  sm: { fontSize: 10, lineHeight: 14 },

  thin: { fontWeight: '300' },
});
