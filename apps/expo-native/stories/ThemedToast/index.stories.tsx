import React from 'react';
import Toast from 'react-native-toast-message';
import { Meta, StoryObj } from '@storybook/react-native';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createToastConfig, ToastType } from '@rms-apps/ui-themed-toast';

const meta: Meta<typeof createToastConfig> = {
  title: 'ThemedToast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const toastConfig = createToastConfig();

    const showToast = (type: ToastType, title: string, message: string) => {
      Toast.show({
        type,
        text1: title,
        text2: message,
      });
    };

    return (
      <View style={styles.container}>
        <Toast config={toastConfig} />

        <Text style={styles.header}>Themed Toasts</Text>

        <View style={styles.buttonGroup}>
          <Button
            title="Show Success Toast"
            onPress={() =>
              showToast('success', 'Success', 'This is a success toast')
            }
          />
        </View>

        <View style={styles.buttonGroup}>
          <Button
            title="Show Error Toast"
            onPress={() => showToast('error', 'Error', 'This is a error toast')}
          />
        </View>

        <View style={styles.buttonGroup}>
          <Button
            title="Show Info Toast"
            onPress={() => showToast('info', 'Info', 'This is an info toast')}
          />
        </View>

        <View style={styles.buttonGroup}>
          <Button
            title="Show Warning Toast"
            onPress={() =>
              showToast('warning', 'Warning', 'This is a warning toast')
            }
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="Show Custom Toast"
            onPress={() =>
              showToast('custom', 'Custom', 'This is a custom toast')
            }
          />
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  buttonGroup: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
