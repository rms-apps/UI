import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { DEFAULT_COLORS, THEME, ThemeProvider } from '@rms-apps/ui-utils';

import '../global.css';

export default function Index() {
  return (
    <ThemeProvider theme={THEME.DARK} palette={DEFAULT_COLORS}>
      <View className="flex flex-1 justify-center items-center">
        <Link href="/storybook" className="font-bold text-blue-500 text-lg">
          <Text>Open Storybook</Text>
        </Link>
      </View>
    </ThemeProvider>
  );
}
