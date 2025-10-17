/* eslint-disable react-native/no-raw-text */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { ThemedText, ThemedTextProps } from '@rms-apps/ui-themed-text';

const meta: Meta<typeof ThemedText> = {
  title: 'ThemedText',
  component: ThemedText,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Sizes story
export const Sizes: Story = {
  render: (args: ThemedTextProps) => (
    <View style={styles.container}>
      <ThemedText size="h2" weight="bold" style={styles.heading}>
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

// Weight story
export const Weights: Story = {
  render: (args: ThemedTextProps) => (
    <View style={styles.container}>
      <ThemedText size="h2" weight="bold" style={styles.heading}>
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

// Variant story
export const Variants: Story = {
  render: (args: ThemedTextProps) => (
    <View style={styles.container}>
      <ThemedText size="h2" weight="bold" style={styles.heading}>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    gap: 8,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    marginBottom: 12,
  },
});
