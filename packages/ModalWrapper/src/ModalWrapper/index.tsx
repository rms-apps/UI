import React from 'react';
import RNModal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import { ThemedView } from '@rms-apps/ui-themed-view';
import { createToastConfig } from '@rms-apps/ui-themed-toast';
import { useThemeColor, ThemeColor } from '@rms-apps/ui-utils';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ModalWrapperHeader, ModalWrapperVariant } from '../ModalWrapperHeader';

export type ModalWrapperProps = {
  children: React.ReactNode;
  isVisible: boolean;
  /** show a tappable backdrop that closes modal on press */
  withTouchableBackdrop?: boolean;
  toastPosition?: 'top' | 'bottom';
  /** 'modal' or 'bottomSheet' */
  variant?: ModalWrapperVariant;
  /** extra offset from bottom (used for bottomSheet) */
  bottomOffset?: number;
  title?: string;
  onRequestClose?: () => void;
};

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  isVisible,
  withTouchableBackdrop = true,
  toastPosition = 'top',
  variant = 'bottomSheet',
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
      <RNModal
        isVisible={isVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        backdropOpacity={0.45}
        animationIn={isBottomSheet ? 'slideInUp' : 'fadeIn'}
        animationOut={isBottomSheet ? 'slideOutDown' : 'fadeOut'}
        style={styles.modalContainer}
        statusBarTranslucent={true}
        propagateSwipe={true} // allow inner scrolls
        onBackButtonPress={onRequestClose}
        onBackdropPress={withTouchableBackdrop ? onRequestClose : undefined}
      >
        <ThemedView
          style={[
            styles.innerContainer,
            isBottomSheet ? styles.bottomSheet : styles.centerModal,
            {
              paddingBottom: bottomOffset + insets.bottom,
            },
          ]}
        >
          {/* Header pinned outside ScrollView so it doesn't scroll away */}
          {title ? (
            <ModalWrapperHeader
              title={title}
              variant={variant}
              onClose={onRequestClose}
            />
          ) : null}

          {/* Scrollable content area */}
          <ScrollView
            contentContainerStyle={[
              styles.scrollContent,
              // if header exists, keep top padding small, otherwise full height
              title ? { paddingTop: 8 } : {},
            ]}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            {children}
          </ScrollView>
        </ThemedView>
      </RNModal>

      {/* Toast (optional) */}
      <Toast config={toastConfig} position={toastPosition} />
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    // pinned to bottom (RNModal container already aligns bottom)
    marginTop: 'auto',
  },
  centerModal: {
    alignSelf: 'center',
    borderRadius: 14,
    // make it centered vertically
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '90%',
  },
  innerContainer: {
    alignSelf: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '90%',
    overflow: 'hidden',
    width: '100%',
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
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollContent: {
    paddingBottom: 0,
    paddingHorizontal: 16,
  },
});
