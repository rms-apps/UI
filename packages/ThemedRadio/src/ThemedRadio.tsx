import { cn, useThemeColor } from '@rms-apps/ui-utils';
import { View, TouchableOpacity } from 'react-native';

export type ThemedRadioProps = {
  label: React.ReactNode;
  selected: boolean;
  disabled?: boolean;
  size?: number;
  reverse?: boolean;
  className?: string;
  onPress: () => void;
};

export const ThemedRadio = ({
  label,
  selected,
  disabled = false,
  size = 20,
  reverse = false,
  className,
  onPress,
}: ThemedRadioProps) => {
  const RADIO_SELECTED = useThemeColor({ name: 'radio_selected' });
  const RADIO_DISABLED = useThemeColor({
    name: 'radio_disabled',
    customColor: { dark: '#334155', light: '#CBD5E1' },
  });

  const borderColor = disabled ? RADIO_DISABLED : RADIO_SELECTED;
  const innerDotColor = disabled ? RADIO_DISABLED : RADIO_SELECTED;

  const RadioCircle = (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 2,
        borderColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {selected && (
        <View
          style={{
            width: size * 0.5,
            height: size * 0.5,
            borderRadius: (size * 0.5) / 2,
            backgroundColor: innerDotColor,
          }}
        />
      )}
    </View>
  );

  return (
    <TouchableOpacity
      disabled={disabled}
      className={cn(disabled && 'opacity-50', className)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onPress={!disabled ? onPress : undefined}
    >
      {reverse && RadioCircle}
      <View className={cn(reverse ? 'mr-2' : 'ml-2')}>{label}</View>
      {!reverse && RadioCircle}
    </TouchableOpacity>
  );
};
