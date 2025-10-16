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

type ToastColors = {
  TOAST_BACKGROUND: string;
  TOAST_TITLE_ERROR?: string;
  TOAST_TITLE_SUCCESS?: string;
  TOAST_TITLE_INFO?: string;
  TOAST_TITLE_WARNING?: string;
  TOAST_SUBTITLE: string;
};

type ToastProps = {
  colors: ToastColors;
  [key: string]: any;
};

export const ErrorToastComponent = ({ colors, ...props }: ToastProps) => {
  const { TOAST_BACKGROUND, TOAST_TITLE_ERROR, TOAST_SUBTITLE } = colors;

  return (
    <ErrorToast
      {...props}
      style={{
        ...toastBaseStyle,
        borderLeftColor: '#FF4D4F',
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

export const SuccessToastComponent = ({ colors, ...props }: ToastProps) => {
  const { TOAST_BACKGROUND, TOAST_TITLE_SUCCESS, TOAST_SUBTITLE } = colors;

  return (
    <BaseToast
      {...props}
      style={{
        ...toastBaseStyle,
        borderLeftColor: '#52C41A',
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

export const InfoToastComponent = ({ colors, ...props }: ToastProps) => {
  const { TOAST_BACKGROUND, TOAST_TITLE_INFO, TOAST_SUBTITLE } = colors;

  return (
    <BaseToast
      {...props}
      style={{
        ...toastBaseStyle,
        borderLeftColor: '#1890FF',
        backgroundColor: TOAST_BACKGROUND,
      }}
      text1Style={{ color: TOAST_TITLE_INFO, fontSize: 16, fontWeight: '600' }}
      text2Style={{ color: TOAST_SUBTITLE, fontSize: 14 }}
    />
  );
};

export const WarningToastComponent = ({ colors, ...props }: ToastProps) => {
  const { TOAST_BACKGROUND, TOAST_TITLE_WARNING, TOAST_SUBTITLE } = colors;

  return (
    <BaseToast
      {...props}
      style={{
        ...toastBaseStyle,
        borderLeftColor: '#FAAD14',
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
