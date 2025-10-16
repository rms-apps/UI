// components/input.stories.tsx
import { Meta, StoryObj } from '@storybook/react-native';
import { ThemedText } from '@rms-apps/ui-themed-text';

const meta = {
  component: ThemedText,
} satisfies Meta<typeof ThemedText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    size: 'b2',
    children: 'Themed Text',
  },
};
