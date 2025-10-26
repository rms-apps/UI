import React from 'react';
import { Text, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { Footer, FooterProps } from '@rms-apps/ui-footer';
import { THEME, DEFAULT_COLORS, ThemeProvider } from '@rms-apps/ui-utils';

const meta: Meta<FooterProps> = {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <ThemeProvider theme={THEME.DARK} palette={DEFAULT_COLORS}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<FooterProps>;

export const Default: Story = {
  render: (args: FooterProps) => (
    <View style={{ flex: 1, backgroundColor: '#0A0A0A', paddingTop: 60 }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          marginBottom: 16,
          fontWeight: '600',
          fontSize: 20,
        }}
      >
        Footer Preview
      </Text>
      <Footer {...args} />
    </View>
  ),
  args: {
    bottomOffset: 10,
    bottomTabBarHeight: 0,
    copyrightText: 'Copyright © 2025 RM Apps',
    craftedWithText: 'Crafted with ✨ in UP, India',
    allRightReservedText: '',
  },
};
