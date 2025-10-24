import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import { ThemedView } from '@rms-apps/ui-themed-view';
import { createToastConfig } from '@rms-apps/ui-themed-toast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Modal, ModalBaseProps, TouchableWithoutFeedback } from 'react-native';
import { ModalWrapperHeader, ModalWrapperVariant } from '../ModalWrapperHeader';

export type ModalWrapperProps = {
  children: React.ReactNode;
  withTouchableOpacity?: boolean;
  toastPosition?: 'top' | 'bottom';
  variant?: ModalWrapperVariant;
  bottomOffset?: number;
  title?: string;
} & ModalBaseProps;

export const ModalWrapper = ({
  children,
  title = '',
  bottomOffset = 0,
  toastPosition = 'top',
  variant = 'bottomSheet',
  withTouchableOpacity = false,
  ...rest
}: ModalWrapperProps) => {
  const insets = useSafeAreaInsets();
  const toastConfig = createToastConfig();

  return (
    <Modal {...rest} transparent>
      <View
        className={`flex-1 bg-black/40 ${
          variant === 'modal'
            ? 'justify-center items-center'
            : 'justify-end items-stretch'
        }`}
      >
        {withTouchableOpacity ? (
          <TouchableWithoutFeedback onPress={rest?.onRequestClose}>
            <View className="absolute inset-0" />
          </TouchableWithoutFeedback>
        ) : null}

        <ThemedView
          className={`rounded-t-2xl ${
            variant === 'modal'
              ? 'w-11/12 max-w-md rounded-2xl p-6'
              : 'w-full p-1'
          }`}
        >
          {title ? (
            <ThemedView
              className="flex flex-col px-4 py-4 gap-4"
              style={{ paddingBottom: bottomOffset + insets.bottom }}
            >
              <ModalWrapperHeader
                title={title}
                variant={variant}
                withDivider={true}
                onClose={rest?.onRequestClose}
              />

              {children}
            </ThemedView>
          ) : (
            children
          )}
        </ThemedView>
      </View>

      <Toast config={toastConfig} position={toastPosition} />
    </Modal>
  );
};
