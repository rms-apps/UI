import { cn } from '@rms-apps/ui-utils';
import { useThemeColor } from '@rms-apps/ui-utils';
import { ThemedText, ThemedTextProps } from '@rms-apps/ui-themed-text';
import {
  View,
  Pressable,
  PressableProps,
  ActivityIndicator,
} from 'react-native';

export type ThemedButtonProps = PressableProps & {
  isLoading?: boolean;
  btnColor?: string;
  txtColor?: string;
  title: string;
  themedTextProps?: ThemedTextProps;
  leftIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  type?: 'hollow' | 'filled' | 'gradient';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
};

export const ThemedButton = ({
  isLoading = false,
  btnColor,
  txtColor,
  title,
  type = 'gradient',
  size = 'medium',
  variant = 'primary',
  themedTextProps,
  style,
  disabled,
  leftIcon,
  ...otherProps
}: ThemedButtonProps) => {
  const buttonColor = useThemeColor({
    customColor: { light: btnColor, dark: btnColor },
    name:
      type !== 'hollow'
        ? `button_bg_${variant}_${type}`
        : `button_bg_${variant}_filled`, // not used in hollow
  });

  const textColor = useThemeColor({
    customColor: {
      light: type === 'hollow' ? txtColor : '',
      dark: type === 'hollow' ? txtColor : '',
    },
    name: `button_text_${variant}_${type}`,
  });

  const sizeClasses =
    size === 'small'
      ? 'px-3 py-1'
      : size === 'large'
        ? 'px-8 py-4'
        : 'px-4 py-2';

  return (
    <Pressable
      disabled={disabled || isLoading}
      android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 },
        disabled && { opacity: 0.5 },
      ]}
      {...otherProps}
    >
      <View
        className={cn(
          'rounded-md',
          sizeClasses,
          (disabled || isLoading) && 'opacity-50',
          type === 'hollow' && 'border',
        )}
        style={
          type === 'hollow'
            ? { borderColor: buttonColor, backgroundColor: 'transparent' }
            : { backgroundColor: buttonColor }
        }
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={textColor} />
        ) : (
          <View className="flex-row justify-center items-center gap-2">
            {leftIcon && leftIcon}
            <ThemedText
              {...themedTextProps}
              style={[{ color: textColor }, themedTextProps?.style]}
            >
              {title}
            </ThemedText>
          </View>
        )}
      </View>
    </Pressable>
  );
};
