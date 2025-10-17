/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from 'react';
import { Platform } from 'react-native';

export const useNotificationsSetup = () => {
  useEffect(() => {
    // Skip notifications completely if running in Expo Go
    // Since Expo Go on Android does not support notifications from SDK 53
    if (Platform.OS === 'android' && (globalThis as any).ExpoGo) {
      return;
    }

    (async () => {
      try {
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
      } catch (e) {
        console.warn('expo-notifications not available:', e);
      }
    })();
  }, []);
};
