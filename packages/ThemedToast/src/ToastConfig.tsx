/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  ErrorToastComponent,
  SuccessToastComponent,
  InfoToastComponent,
  WarningToastComponent,
  CustomToastComponent,
} from './ThemedToast';

export type ToastColors = {
  TOAST_BACKGROUND: string;
  TOAST_TITLE_ERROR?: string;
  TOAST_TITLE_SUCCESS?: string;
  TOAST_TITLE_INFO?: string;
  TOAST_TITLE_WARNING?: string;
  TOAST_TITLE_CUSTOM?: string;
  TOAST_SUBTITLE: string;
};

export type ToastType = 'error' | 'success' | 'info' | 'warning' | 'custom';

export const createToastConfig = (colors: ToastColors) => ({
  error: (props: any) => <ErrorToastComponent {...props} colors={colors} />,
  success: (props: any) => <SuccessToastComponent {...props} colors={colors} />,
  info: (props: any) => <InfoToastComponent {...props} colors={colors} />,
  warning: (props: any) => <WarningToastComponent {...props} colors={colors} />,
  custom: (props: any) => <CustomToastComponent {...props} colors={colors} />,
});
