/* eslint-disable react-native/no-raw-text */

import { View } from 'react-native';
import { useThemeColor } from '@rms-apps/ui-utils';
import { ThemedText } from '@rms-apps/ui-themed-text';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Defs, LinearGradient, Stop, G } from 'react-native-svg';

export type FooterProps = {
  bottomTabBarHeight: number;
  bottomOffset?: number;
  copyrightText?: string;
  craftedWithText?: string;
  allRightReservedText?: string;
};

export const Footer = ({
  bottomTabBarHeight,
  bottomOffset = 10,
  allRightReservedText = '',
  copyrightText = 'Copyright © 2025 RM Apps',
  craftedWithText = 'Crafted with ✨ in UP, India',
}: FooterProps) => {
  const footerFirstWaveColor = useThemeColor({
    name: 'footer_first_wave_color',
    customColor: { light: '#29E3B4', dark: '#3777FF' },
  });

  const footerSecondWaveColor = useThemeColor({
    name: 'footer_second_wave_color',
    customColor: { light: '#3777FF', dark: '#29E3B4' },
  });

  return (
    <View
      style={{
        left: 0,
        right: 0,
        height: 260,
        overflow: 'hidden',
        position: 'absolute',
        bottom: bottomTabBarHeight + bottomOffset,
      }}
    >
      <Svg height="260" width="100%" viewBox="0 0 1440 320">
        <Defs>
          <LinearGradient id="footerGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={footerFirstWaveColor} stopOpacity="1" />
            <Stop
              offset="1"
              stopColor={footerSecondWaveColor}
              stopOpacity="1"
            />
          </LinearGradient>
        </Defs>

        <G scaleY={2}>
          <Path
            fill="url(#footerGradient)"
            opacity="0.3"
            d="M0,180 C360,40 1080,320 1440,100 V320 H0 Z"
          />

          {/* Wave 2 */}
          <Path
            fill="url(#footerGradient)"
            opacity="0.4"
            d="M0,200 C380,80 1100,360 1440,140 V320 H0 Z"
          />

          {/* Wave 3 */}
          <Path
            fill="url(#footerGradient)"
            opacity="0.5"
            d="M0,220 C400,120 1080,300 1440,180 V320 H0 Z"
          />

          {/* Wave 4 */}
          <Path
            fill="url(#footerGradient)"
            opacity="0.7"
            d="M0,240 C420,160 1060,340 1440,200 V320 H0 Z"
          />

          {/* Wave 5 */}
          <Path
            fill="url(#footerGradient)"
            opacity="0.9"
            d="M0,260 C440,200 1040,380 1440,220 V320 H0 Z"
          />
        </G>
      </Svg>

      <View
        className="flex flex-col gap-[1px]"
        style={{
          bottom: 100,
          left: 0,
          right: 0,
          position: 'absolute',
          alignItems: 'center',
        }}
      >
        <ThemedText size="b2" className="text-white font-semibold">
          {craftedWithText}
        </ThemedText>

        <ExpoLinearGradient
          colors={['#4facfe', '#00f2fe', '#4facfe']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: 3,
            width: 185,
            borderRadius: 2,
            marginVertical: 4,
          }}
        />

        <ThemedText size="b3" className="text-white mt-1">
          {copyrightText}
        </ThemedText>

        {allRightReservedText && (
          <ThemedText size="b3" className="text-white mt-1">
            {allRightReservedText}
          </ThemedText>
        )}

        <ThemedText size="b3" className="text-white mt-1" weight="semibold">
          Rishi Mishra
        </ThemedText>
      </View>
    </View>
  );
};
