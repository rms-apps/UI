import React from 'react';
import { Text, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { Footer, FooterProps } from '@rms-apps/ui-footer';
import { THEME, DEFAULT_COLORS, ThemeProvider } from '@rms-apps/ui-utils';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <ThemeProvider theme={THEME.DARK} palette={DEFAULT_COLORS}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    bottomTabBarHeight: 0,
    bottomOffset: 10,
    copyrightText: 'Copyright © 2025 RM Apps',
    craftedWithText: 'Crafted with ✨ in UP, India',
    allRightReservedText: '',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: FooterProps) => (
    <View style={{ flex: 1, backgroundColor: '#0A0A0A', paddingTop: 60 }}>
      <Text className="text-white text-center mb-4 font-semibold text-xl">
        Footer Preview
      </Text>

      <Footer {...args} />
    </View>
  ),
};
