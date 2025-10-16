import { useEffect } from 'react';
import { Platform } from 'react-native';

export const useNotificationsSetup = () => {
  useEffect(() => {
    if (Platform.OS === 'web') return;

    (async () => {
      const Notifications = await import('expo-notifications');
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Notification permissions not granted!');
      }

      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowBanner: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
          shouldShowList: true,
        }),
      });
    })();
  }, []);
};
