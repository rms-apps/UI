import { useThemeColor, cn } from '@rms-apps/ui-utils';
import { View, ViewProps, DimensionValue } from 'react-native';

export type Variant = 'block' | 'dashed' | 'default';
export type Alignment = 'horizontal' | 'vertical';

export type DividerProps = {
  size?: string | DimensionValue;
  color?: string;
  variant?: Variant;
  alignment?: Alignment;
  lightColor?: string;
  darkColor?: string;
} & ViewProps;

const BORDER_MAIN_WIDTH = 1;
const BORDER_BLOCK_WIDTH = 6;

export const ThemedDivider = ({
  lightColor,
  darkColor,
  size = '100%',
  variant = 'default',
  alignment = 'horizontal',
  style,
  ...restProps
}: DividerProps) => {
  const dividerColor = useThemeColor({
    customColor: { light: lightColor, dark: darkColor },
    name: `divider`,
  });

  const isHorizontal = alignment === 'horizontal';
  const borderWidth =
    variant === 'block' ? BORDER_BLOCK_WIDTH : BORDER_MAIN_WIDTH;

  const borderStyle = variant === 'dashed' ? 'dashed' : 'solid';

  return (
    <View
      className="w-full flex flex-row justify-center items-center"
      {...restProps}
    >
      <View
        className={cn('self-center', isHorizontal ? '' : 'h-full')}
        style={[
          {
            [isHorizontal ? 'width' : 'height']: size as DimensionValue,
            borderColor: dividerColor,
            ...(isHorizontal
              ? { borderTopWidth: borderWidth }
              : { borderLeftWidth: borderWidth }),
            borderStyle,
          },
          style,
        ]}
      />
    </View>
  );
};
