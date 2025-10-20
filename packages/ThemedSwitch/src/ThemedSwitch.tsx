import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { LinearGradientColors } from '@rms-apps/ui-utils';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Size = 'small' | 'medium' | 'large';

export type ThemedSwitchProps = {
  size?: Size;
  value: boolean;
  disabled?: boolean;
  onValueChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultStyles = {
  bgGradientColors: ['#7A7D85', '#7A7D85'] as LinearGradientColors,
  headGradientColors: ['#ffffff', '#E1E4E8'] as LinearGradientColors,
};

const activeStyles = {
  bgGradientColors: ['#00c4ff', '#fff600'] as LinearGradientColors,
  headGradientColors: ['#444D56', '#0E1723'] as LinearGradientColors,
};

const disabledStyles = {
  bgGradientColors: ['#B0B0B0', '#D0D0D0'] as LinearGradientColors,
  headGradientColors: ['#E0E0E0', '#F0F0F0'] as LinearGradientColors,
};

export const ThemedSwitch = ({
  value,
  size = 'small',
  disabled = false,
  onValueChange,
}: ThemedSwitchProps) => {
  const OFFSET = 4;
  const pressableContainerWidth =
    size === 'large' ? 100 : size === 'medium' ? 60 : 45;
  const pressableHeadWidth =
    size === 'large' ? 40 : size === 'medium' ? 24 : 18;

  const enabled = useSharedValue(value ? 1 : 0);

  const animatedToggleStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      enabled.value,
      [0, 1],
      [OFFSET, pressableContainerWidth - pressableHeadWidth - OFFSET],
    );
    return { transform: [{ translateX }] };
  });

  const handleToggle = () => {
    if (!disabled) {
      onValueChange((prev) => !prev);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    enabled.value = withSpring(value ? 1 : 0, { duration: 350 });
  }, [value]);

  const currentStyles = disabled
    ? disabledStyles
    : value
      ? activeStyles
      : defaultStyles;

  const styles = StyleSheet.create({
    backgroundGradient: {
      borderRadius: 100,
      flex: 1,
    },
    headGradient: {
      borderRadius: 100,
      height: size === 'large' ? 40 : size === 'medium' ? 24 : 18,
      width: pressableHeadWidth,
    },
    innerContainer: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      position: 'relative',
    },
    pressable: {
      borderRadius: 100,
      height: size === 'large' ? 48 : size === 'medium' ? 30 : 24,
      width: pressableContainerWidth,
    },
  });

  return (
    <Pressable style={styles.pressable} onPress={handleToggle}>
      <LinearGradient
        style={styles.backgroundGradient}
        colors={currentStyles.bgGradientColors}
        start={{
          x: 0,
          y: 0.5,
        }}
      >
        <View style={styles.innerContainer}>
          <Animated.View style={animatedToggleStyle}>
            <LinearGradient
              style={styles.headGradient}
              colors={currentStyles.headGradientColors}
            />
          </Animated.View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default ThemedSwitch;
