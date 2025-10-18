import { Text, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { ThemedButton, ThemedButtonProps } from '@rms-apps/ui-themed-button';

const meta = {
  title: 'ThemedButton',
  component: ThemedButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Type: Story = {
  render: (args: ThemedButtonProps) => (
    <View className="p-2 flex flex-col gap-2">
      <Text className="bold">Button Type</Text>
      {['hollow', 'gradient', 'filled'].map((type) => (
        <ThemedButton
          key={type}
          {...args}
          title={`Type: ${type}`}
          type={type as ThemedButtonProps['type']}
        />
      ))}
    </View>
  ),
  args: {
    title: '',
    variant: 'primary',
    type: 'filled',
  },
};

export const Variant: Story = {
  render: (args: ThemedButtonProps) => (
    <View className="p-2 flex flex-col gap-2">
      <Text className="bold">Button Variant</Text>
      {['primary', 'secondary', 'tertiary'].map((variant) => (
        <ThemedButton
          key={variant}
          {...args}
          title={`Variant: ${variant}`}
          variant={variant as ThemedButtonProps['variant']}
        />
      ))}
    </View>
  ),
  args: {
    title: '',
    variant: 'primary',
    type: 'filled',
  },
};

export const Sizes: Story = {
  render: (args: ThemedButtonProps) => (
    <View className="p-2 flex flex-col gap-2">
      <Text className="bold">Button Size</Text>
      {['small', 'medium', 'large'].map((size) => (
        <ThemedButton
          key={size}
          {...args}
          title={`Size: ${size}`}
          size={size as ThemedButtonProps['size']}
        />
      ))}
    </View>
  ),
  args: {
    title: '',
    variant: 'primary',
    type: 'filled',
  },
};
