import { useFonts } from 'expo-font';

export const useAppFonts = () => {
  return useFonts({
    NotoSansExtraBold: require('../assets/fonts/NotoSans-ExtraBold.ttf'),
    NotoSansBold: require('../assets/fonts/NotoSans-Bold.ttf'),
    NotoSansSemiBold: require('../assets/fonts/NotoSans-SemiBold.ttf'),
    NotoSansMedium: require('../assets/fonts/NotoSans-Medium.ttf'),
    NotoSansRegular: require('../assets/fonts/NotoSans-Regular.ttf'),
    NotoSansThin: require('../assets/fonts/NotoSans-Thin.ttf'),
    NotoSansLight: require('../assets/fonts/NotoSans-Light.ttf'),
    NotoSansCondensedSemiBold: require('../assets/fonts/NotoSans_Condensed-SemiBold.ttf'),
    NotoSansCondensedRegular: require('../assets/fonts/NotoSans_Condensed-Regular.ttf'),
  });
};
