/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  ErrorToastComponent,
  SuccessToastComponent,
  InfoToastComponent,
  WarningToastComponent,
  CustomToastComponent,
} from './ThemedToast';

export type ToastType = 'error' | 'success' | 'info' | 'warning' | 'custom';

export const createToastConfig = () => ({
  error: (props: any) => <ErrorToastComponent {...props} />,
  success: (props: any) => <SuccessToastComponent {...props} />,
  info: (props: any) => <InfoToastComponent {...props} />,
  warning: (props: any) => <WarningToastComponent {...props} />,
  custom: (props: any) => <CustomToastComponent {...props} />,
});
