import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { ThemedText } from '@rms-apps/ui-themed-text';
import { Meta, StoryObj } from '@storybook/react-native';
import { ModalWrapper } from '@rms-apps/ui-modal-wrapper';
import { ThemedButton } from '@rms-apps/ui-themed-button';

const meta = {
  title: 'Components/ModalWrapper',
  component: ModalWrapper,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const bottomSheet: Story = {
  render: (args) => {
    const [title, setTitle] = useState('');
    const [visible, setVisible] = useState(false);

    return (
      <View className="flex-1 items-center justify-center bg-black/5 gap-4">
        <Button
          title="Open BottomSheet"
          onPress={() => {
            setTitle('');
            setVisible(true);
          }}
        />
        <Button
          title="Open BottomSheet With Title"
          onPress={() => {
            setTitle('BottomSheet');
            setVisible(true);
          }}
        />

        <ModalWrapper
          {...args}
          title={title}
          visible={visible}
          animationType="slide"
          onRequestClose={() => setVisible(false)}
        >
          <View className="p-4 items-center gap-2">
            <ThemedText>Hello from ModalWrapper (BottomSheet)</ThemedText>
            {!title && (
              <ThemedButton title="Close" onPress={() => setVisible(false)} />
            )}
          </View>
        </ModalWrapper>
      </View>
    );
  },
  args: {
    variant: 'bottomSheet',
    children: null,
  },
};

export const Modal: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');

    return (
      <View className="flex-1 items-center justify-center bg-black/5 gap-4">
        <Button
          title="Open Modal"
          onPress={() => {
            setTitle('');
            setVisible(true);
          }}
        />
        <Button
          title="Open Modal With Title"
          onPress={() => {
            setTitle('Modal');
            setVisible(true);
          }}
        />

        <ModalWrapper
          {...args}
          title={title}
          visible={visible}
          animationType="slide"
          onRequestClose={() => setVisible(false)}
        >
          <View className="p-4 items-center gap-2">
            <ThemedText>Hello from ModalWrapper! (Modal)</ThemedText>
            {!title && (
              <ThemedButton title="Close" onPress={() => setVisible(false)} />
            )}
          </View>
        </ModalWrapper>
      </View>
    );
  },
  args: {
    variant: 'modal',
    children: null,
  },
};
