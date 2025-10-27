import React from 'react';
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { ThemedView } from '@rms-apps/ui-themed-view';
import { createToastConfig } from '@rms-apps/ui-themed-toast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ModalWrapperHeader, ModalWrapperVariant } from '../ModalWrapperHeader';

export type ModalWrapperProps = {
  children: React.ReactNode;
  isVisible: boolean;
  withTouchableBackdrop?: boolean;
  toastPosition?: 'top' | 'bottom';
  variant?: ModalWrapperVariant;
  bottomOffset?: number;
  title?: string;
  onRequestClose?: () => void;
};

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  isVisible,
  toastPosition = 'top',
  variant = 'bottomSheet',
  withTouchableBackdrop = true,
  bottomOffset = 0,
  title,
  onRequestClose,
}) => {
  const insets = useSafeAreaInsets();
  const isBottomSheet = variant === 'bottomSheet';
  const toastConfig =
    typeof createToastConfig === 'function' ? createToastConfig() : undefined;

  return (
    <>
      <Modal
        visible={isVisible}
        transparent
        animationType={isBottomSheet ? 'slide' : 'fade'}
        statusBarTranslucent
        onRequestClose={onRequestClose}
      >
        <View style={styles.fullscreenOverlay}>
          {/* Backdrop */}
          <TouchableWithoutFeedback
            onPress={withTouchableBackdrop ? onRequestClose : undefined}
          >
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          {/* Modal Content */}
          <View
            style={[
              styles.modalWrapper,
              isBottomSheet
                ? { justifyContent: 'flex-end' }
                : { justifyContent: 'center' },
            ]}
          >
            <ThemedView
              style={[
                styles.innerContainer,
                isBottomSheet
                  ? styles.bottomSheetRadius
                  : styles.centerModalRadius,
                { paddingBottom: bottomOffset + insets.bottom },
              ]}
            >
              {title ? (
                <ModalWrapperHeader
                  title={title}
                  variant={variant}
                  onClose={onRequestClose}
                />
              ) : null}

              <ScrollView
                contentContainerStyle={[
                  styles.scrollContent,
                  title ? { paddingTop: 8 } : {},
                ]}
                showsVerticalScrollIndicator={false}
                bounces={false}
              >
                {children}
              </ScrollView>
            </ThemedView>
          </View>
        </View>
      </Modal>

      <Toast config={toastConfig} position={toastPosition} />
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  bottomSheetRadius: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  centerModalRadius: {
    alignSelf: 'center',
    borderRadius: 16,
    width: '90%',
  },
  fullscreenOverlay: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  innerContainer: {
    maxHeight: '90%',
    overflow: 'hidden',
    ...Platform.select({
      android: { elevation: 8 },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { height: -4, width: 0 },
      },
    }),
  },
  modalWrapper: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 0,
    paddingHorizontal: 16,
  },
});
