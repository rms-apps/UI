import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@rms-apps/ui-utils';
import { ThemedText } from '@rms-apps/ui-themed-text';
import { View, Pressable, ViewStyle, ViewProps } from 'react-native';

export type ThemedCheckboxProps = {
  disabled?: boolean;
  label: string;
  isSelected: boolean;
  size?: number;
  style?: ViewStyle;
  viewStyle?: ViewStyle;
  labelInfo?: string;
  onPress: () => void;
} & ViewProps;

export const ThemedCheckbox = ({
  label,
  isSelected,
  size = 20,
  style,
  viewStyle,
  disabled = false,
  labelInfo = '',
  onPress,
  ...props
}: ThemedCheckboxProps) => {
  const CHECKBOX_SELECTED = useThemeColor({ name: 'checkbox_selected' });
  const CHECKBOX_BACKGROUND = useThemeColor({ name: 'checkbox_background' });

  const DISABLED_BG = useThemeColor({
    name: 'checkbox_disabled_background',
    customColor: { dark: '#1E293B', light: '#F1F5F9' },
  });
  const DISABLED_BORDER = useThemeColor({
    name: 'checkbox_disabled_border',
    customColor: { dark: '#334155', light: '#CBD5E1' },
  });

  return (
    <Pressable
      style={style}
      disabled={disabled}
      className="flex-row items-end justify-between px-3 gap-2"
      onPress={onPress}
      {...props}
    >
      <View className="flex flex-col">
        <ThemedText align="flex-start">{label}</ThemedText>
        {labelInfo && (
          <ThemedText size="b3" variant="secondary" align="flex-start">
            {labelInfo}
          </ThemedText>
        )}
      </View>

      <View
        style={[
          {
            width: size,
            height: size,
            borderRadius: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: disabled
              ? DISABLED_BG
              : isSelected
                ? CHECKBOX_BACKGROUND
                : '#FFF',
            borderColor: disabled ? DISABLED_BORDER : CHECKBOX_SELECTED,
            borderWidth: 1.5,
          },
          viewStyle,
        ]}
      >
        {isSelected && (
          <Ionicons
            name="checkmark"
            size={size * 0.6}
            color={disabled ? DISABLED_BORDER : CHECKBOX_SELECTED}
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
            }}
          />
        )}
      </View>
    </Pressable>
  );
};
