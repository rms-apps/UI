import React from 'react';
import { Text, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { ThemedView, ThemedViewProps } from '@rms-apps/ui-themed-view';

const meta: Meta<typeof ThemedView> = {
  title: 'ThemedView',
  component: ThemedView,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: (args: ThemedViewProps) => {
    const variants: ThemedViewProps['variant'][] = [
      'primary',
      'secondary',
      'tertiary',
    ];

    return (
      <View className="p-4 flex flex-col gap-4">
        <Text className="font-bold text-lg mb-2">ThemedView Variants</Text>
        {variants.map((variant) => (
          <ThemedView
            key={variant}
            {...args}
            variant={variant}
            className="p-4 rounded"
          >
            <Text className="text-white font-medium">{`Variant: ${variant}`}</Text>
          </ThemedView>
        ))}
      </View>
    );
  },
  args: {
    style: {},
  },
};
