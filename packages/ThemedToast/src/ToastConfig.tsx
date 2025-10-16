import {
  ErrorToastComponent,
  SuccessToastComponent,
  InfoToastComponent,
  WarningToastComponent,
} from './ThemedToast';

export const createToastConfig = (colors: any) => ({
  error: (props: any) => <ErrorToastComponent {...props} colors={colors} />,
  success: (props: any) => <SuccessToastComponent {...props} colors={colors} />,
  info: (props: any) => <InfoToastComponent {...props} colors={colors} />,
  warning: (props: any) => <WarningToastComponent {...props} colors={colors} />,
});
