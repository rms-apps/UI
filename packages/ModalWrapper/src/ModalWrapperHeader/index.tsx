import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@rms-apps/ui-themed-text';
import type { GestureResponderEvent } from 'react-native';
import { ThemedDivider } from '@rms-apps/ui-themed-divider';
import { ThemeColor, useThemeColor } from '@rms-apps/ui-utils';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export type ModalWrapperVariant = 'modal' | 'bottomSheet';

export type ModalWrapperHeaderProps = {
  title?: string;
  withDivider?: boolean;
  variant?: ModalWrapperVariant;
  iconColor?: ThemeColor;
  handleColor?: ThemeColor;
  onClose?: (e?: GestureResponderEvent) => void;
};

export const ModalWrapperHeader: React.FC<ModalWrapperHeaderProps> = ({
  title = '',
  variant = 'bottomSheet',
  withDivider = true,
  iconColor,
  handleColor,
  onClose,
}) => {
  const ICON_COLOR = useThemeColor({
    name: 'modal_wrapper_header_close_icon',
    customColor: { light: iconColor?.light, dark: iconColor?.dark },
  });

  const HANDLE_COLOR = useThemeColor({
    name: 'modal_wrapper_header_handle',
    customColor: { light: handleColor?.light, dark: handleColor?.dark },
  });

  return (
    <View
      style={[
        styles.container,
        variant === 'bottomSheet' && {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
      ]}
    >
      <View style={[styles.row, !withDivider && styles.headerMargin]}>
        {/* Drag handle for bottom sheet variant */}
        {variant === 'bottomSheet' && (
          <View style={styles.handleContainer}>
            <View style={[styles.handle, { backgroundColor: HANDLE_COLOR }]} />
          </View>
        )}

        <View style={styles.headerRow}>
          <ThemedText
            numberOfLines={1}
            style={styles.title}
            size="b1"
            weight="semibold"
          >
            {title}
          </ThemedText>

          {onClose && (
            <TouchableOpacity
              onPress={onClose}
              style={[styles.iconButton, { backgroundColor: HANDLE_COLOR }]}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons name="close" size={18} color={ICON_COLOR} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {withDivider && <ThemedDivider style={styles.divider} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingTop: 8,
  },
  divider: {
    marginBottom: 12,
    marginTop: 12,
  },
  handle: {
    borderRadius: 2,
    height: 4,
    width: 36,
  },
  handleContainer: {
    alignItems: 'center',
    marginBottom: 8,
    width: '100%',
  },
  headerMargin: { marginBottom: 12 },
  headerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconButton: {
    borderRadius: 8,
    padding: 6,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    fontSize: 17,
  },
});
