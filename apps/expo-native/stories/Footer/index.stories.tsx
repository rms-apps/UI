import React from 'react';
import { Meta, StoryObj } from '@storybook/react-native';
import { Footer, FooterProps } from '@rms-apps/ui-footer';
import { THEME, DEFAULT_COLORS, ThemeProvider } from '@rms-apps/ui-utils';
import { ThemedView } from '@rms-apps/ui-themed-view';
import { ThemedText } from '@rms-apps/ui-themed-text';

const meta: Meta<FooterProps> = {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <ThemeProvider theme={THEME.LIGHT} palette={DEFAULT_COLORS}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<FooterProps>;

export const Default: Story = {
  render: (args: FooterProps) => (
    <ThemedView style={{ flex: 1, paddingTop: 60 }}>
      <ThemedText
        style={{
          textAlign: 'center',
          marginBottom: 16,
          fontWeight: '600',
          fontSize: 20,
        }}
      >
        Footer Preview
      </ThemedText>
      <Footer {...args} />
    </ThemedView>
  ),
  args: {
    bottomOffset: 10,
    bottomTabBarHeight: 0,
    copyrightText: 'Copyright © 2025 RM Apps',
    craftedWithText: 'Crafted with ✨ in UP, India',
    allRightReservedText: '',
  },
};
