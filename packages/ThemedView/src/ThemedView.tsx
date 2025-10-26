import { useThemeColor } from '@rms-apps/ui-utils';
import { View, type ViewProps } from 'react-native';

export type ViewVariant = 'primary' | 'secondary' | 'tertiary';

export type ThemedViewProps = ViewProps & {
  variant?: ViewVariant;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  darkColor,
  lightColor,
  variant = 'primary',
  className,
  style,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({
    name: `background_${variant}`,
    customColor: { light: lightColor, dark: darkColor },
  });

  return (
    <View
      className={className}
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}
