/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { ThemedText, ThemedTextProps } from '@rms-apps/ui-themed-text';

const meta: Meta<typeof ThemedText> = {
  title: 'Themed/Text',
  component: ThemedText,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Font Sizes
export const Sizes: Story = {
  render: (args: ThemedTextProps) => (
    <View className="flex flex-col justify-center items-start p-5 space-y-2">
      <ThemedText size="h2" weight="bold" className="mb-3">
        Font Sizes
      </ThemedText>

      {['h1', 'h2', 'h3', 'b1', 'b2', 'b3', 'sm'].map((size) => (
        <ThemedText key={size} {...args} size={size as ThemedTextProps['size']}>
          {`Size: ${size}`}
        </ThemedText>
      ))}
    </View>
  ),
  args: {
    weight: 'regular',
    variant: 'primary',
  },
};

// Font Weights
export const Weights: Story = {
  render: (args: ThemedTextProps) => (
    <View className="flex flex-col justify-center items-start p-5 space-y-2">
      <ThemedText size="h2" weight="bold" className="mb-3">
        Font Weights
      </ThemedText>

      {['bold', 'semibold', 'normal', 'regular', 'thin'].map((weight) => (
        <ThemedText
          key={weight}
          {...args}
          weight={weight as ThemedTextProps['weight']}
        >
          {`Weight: ${weight}`}
        </ThemedText>
      ))}
    </View>
  ),
  args: {
    size: 'b2',
    variant: 'primary',
  },
};

// Color Variants
export const Variants: Story = {
  render: (args: ThemedTextProps) => (
    <View className="flex flex-col justify-center items-start p-5 space-y-2">
      <ThemedText size="h2" weight="bold" className="mb-3">
        Color Variants
      </ThemedText>

      {['primary', 'secondary', 'tertiary'].map((variant) => (
        <ThemedText
          key={variant}
          {...args}
          variant={variant as ThemedTextProps['variant']}
        >
          {`Variant: ${variant}`}
        </ThemedText>
      ))}
    </View>
  ),
  args: {
    size: 'b2',
    weight: 'regular',
  },
};
