/* eslint-disable @typescript-eslint/no-explicit-any */

import { useThemeColor } from '@rms-apps/ui-utils';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

const toastBaseStyle = {
  paddingHorizontal: 16,
  borderLeftWidth: 4,
  borderRadius: 12,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 6,
  zIndex: 9999,
};

type ToastProps = {
  [key: string]: any;
};

export const ErrorToastComponent = ({ ...props }: ToastProps) => {
  const TOAST_SUBTITLE = useThemeColor({ name: 'toast_subtitle' });
  const TOAST_BACKGROUND = useThemeColor({ name: 'toast_background' });
  const TOAST_TITLE_ERROR = useThemeColor({ name: 'toast_title_error' });

  return (
    <ErrorToast
      {...props}
      style={{
        ...toastBaseStyle,
        borderLeftColor: TOAST_TITLE_ERROR,
        backgroundColor: TOAST_BACKGROUND,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: TOAST_TITLE_ERROR,
      }}
      text2Style={{ color: TOAST_SUBTITLE, fontSize: 14 }}
    />
  );
};

export const SuccessToastComponent = ({ ...props }: ToastProps) => {
  const TOAST_SUBTITLE = useThemeColor({ name: 'toast_subtitle' });
  const TOAST_BACKGROUND = useThemeColor({ name: 'toast_background' });
  const TOAST_TITLE_SUCCESS = useThemeColor({ name: 'toast_title_success' });

  return (
    <BaseToast
      {...props}
      style={{
        ...toastBaseStyle,
        borderLeftColor: TOAST_TITLE_SUCCESS,
        backgroundColor: TOAST_BACKGROUND,
      }}
      text1Style={{
        color: TOAST_TITLE_SUCCESS,
        fontSize: 16,
        fontWeight: '600',
      }}
      text2Style={{ color: TOAST_SUBTITLE, fontSize: 14 }}
    />
  );
};

export const InfoToastComponent = ({ ...props }: ToastProps) => {
  const TOAST_SUBTITLE = useThemeColor({ name: 'toast_subtitle' });
  const TOAST_BACKGROUND = useThemeColor({ name: 'toast_background' });
  const TOAST_TITLE_INFO = useThemeColor({ name: 'toast_title_info' });

  return (
    <BaseToast
      {...props}
      style={{
        ...toastBaseStyle,
        borderLeftColor: TOAST_TITLE_INFO,
        backgroundColor: TOAST_BACKGROUND,
      }}
      text1Style={{ color: TOAST_TITLE_INFO, fontSize: 16, fontWeight: '600' }}
      text2Style={{ color: TOAST_SUBTITLE, fontSize: 14 }}
    />
  );
};

export const WarningToastComponent = ({ ...props }: ToastProps) => {
  const TOAST_SUBTITLE = useThemeColor({ name: 'toast_subtitle' });
  const TOAST_BACKGROUND = useThemeColor({ name: 'toast_background' });
  const TOAST_TITLE_WARNING = useThemeColor({ name: 'toast_title_warning' });

  return (
    <BaseToast
      {...props}
      style={{
        ...toastBaseStyle,
        borderLeftColor: TOAST_TITLE_WARNING,
        backgroundColor: TOAST_BACKGROUND,
      }}
      text1Style={{
        color: TOAST_TITLE_WARNING,
        fontSize: 16,
        fontWeight: '600',
      }}
      text2Style={{ color: TOAST_SUBTITLE, fontSize: 14 }}
    />
  );
};

export const CustomToastComponent = ({ ...props }: ToastProps) => {
  const TOAST_SUBTITLE = useThemeColor({ name: 'toast_subtitle' });
  const TOAST_BACKGROUND = useThemeColor({ name: 'toast_background' });
  const TOAST_TITLE_CUSTOM = useThemeColor({ name: 'toast_title_custom' });

  return (
    <BaseToast
      {...props}
      style={{
        ...toastBaseStyle,
        borderLeftColor: TOAST_TITLE_CUSTOM,
        backgroundColor: TOAST_BACKGROUND,
      }}
      text1Style={{
        color: TOAST_TITLE_CUSTOM,
        fontSize: 16,
        fontWeight: '600',
      }}
      text2Style={{ color: TOAST_SUBTITLE, fontSize: 14 }}
    />
  );
};
