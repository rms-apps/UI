/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  NativeSyntheticEvent,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useThemeColor } from '@rms-apps/ui-utils';
import { ThemedText } from '@rms-apps/ui-themed-text';
import { ThemedView } from '@rms-apps/ui-themed-view';
import { ThemedDivider } from '@rms-apps/ui-themed-divider';

export type ModalWrapperVariant = 'modal' | 'bottomSheet';

type ModalWrapperHeaderProps = {
  title: string;
  variant: ModalWrapperVariant;
  withDivider?: boolean;
  onClose?: (event: NativeSyntheticEvent<any>) => void;
};

export const ModalWrapperHeader = ({
  title,
  withDivider = false,
  onClose,
}: ModalWrapperHeaderProps) => {
  const THEMED_TEXT = useThemeColor({ name: 'themed_text' });
  const THEMED_BACKGROUND = useThemeColor({ name: 'themed_background' });

  return (
    <ThemedView style={[styles.container, withDivider && styles.withDivider]}>
      <ThemedView style={styles.headerRow}>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: THEMED_BACKGROUND }]}
          onPress={onClose}
        >
          <AntDesign size={16} name="arrow-left" color={THEMED_TEXT} />
        </TouchableOpacity>

        <ThemedText size="b1" weight="semibold">
          {title}
        </ThemedText>
      </ThemedView>

      {withDivider && <ThemedDivider style={styles.divider} />}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    padding: 8,
  },
  container: {
    flexDirection: 'column',
  },
  divider: {
    marginVertical: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    columnGap: 16, // for RN >= 0.76, use gap properties
  } as ViewStyle,
  withDivider: {
    paddingTop: 16,
  },
});
