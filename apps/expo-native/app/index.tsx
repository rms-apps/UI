import { useEffect } from 'react';
import { router } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { DEFAULT_COLORS, THEME, ThemeProvider } from '@rms-apps/ui-utils';

import '../global.css';

export default function Index() {
  useEffect(() => {
    if (__DEV__) {
      // Small delay to ensure layout fully mounts before redirect
      const timeout = setTimeout(() => {
        router.replace('/storybook');
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <ThemeProvider theme={THEME.DARK} palette={DEFAULT_COLORS}>
      <View className="flex flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#60A5FA" />
      </View>
    </ThemeProvider>
  );
}
