import { Meta, StoryObj } from '@storybook/react-native';

import { ThemedButton } from '@rms-apps/ui-themed-button';

const meta = {
  title: 'ThemedButton',
  component: ThemedButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Hello I am  ThemedButton',
  },
};
