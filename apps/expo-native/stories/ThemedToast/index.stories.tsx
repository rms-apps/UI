import React from 'react';
import { Button } from 'react-native';
import Toast from 'react-native-toast-message';
import { Meta, StoryObj } from '@storybook/react-native';
import { createToastConfig } from '@rms-apps/ui-themed-toast';

const meta: Meta = {
  title: 'ThemedToast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const colors = {
  TOAST_BACKGROUND: '#fff',
  TOAST_TITLE_ERROR: '#f00',
  TOAST_TITLE_SUCCESS: 'rgba(16, 148, 16, 1)',
  TOAST_TITLE_INFO: '#00f',
  TOAST_TITLE_WARNING: '#fa0',
  TOAST_SUBTITLE: '#888',
};

export const Default: Story = {
  render: (args) => {
    // Set up toast config with dynamic colors
    // Toast.setRef(null); // Reset ref if needed
    const toastConfig = createToastConfig(colors);

    return (
      <>
        <Toast config={toastConfig} />
        <Button
          title="Show Toast"
          onPress={() =>
            Toast.show({
              type: 'success',
              text1: 'Title',
              text2: 'This is a subtitle',
            })
          }
        />
      </>
    );
  },
  args: {},
};
