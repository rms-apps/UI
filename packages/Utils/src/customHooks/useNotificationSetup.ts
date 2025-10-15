import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

export const useNotificationsSetup = () => {
  useEffect(() => {
    (async () => {
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
