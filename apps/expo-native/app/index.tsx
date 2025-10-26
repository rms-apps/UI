import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { DEFAULT_COLORS, THEME, ThemeProvider } from '@rms-apps/ui-utils';

import '../global.css';

export default function Index() {
  const router = useRouter();

  const isReady = true;

  useEffect(() => {
    if (!isReady) return;

    if (__DEV__) {
      // Small delay to ensure layout fully mounts before redirect
      const timeout = setTimeout(() => {
        router.replace('/storybook');
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFF',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return null;
}
