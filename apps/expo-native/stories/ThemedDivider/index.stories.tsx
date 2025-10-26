import { Text, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { ThemedDivider, DividerProps } from '@rms-apps/ui-themed-divider';

const meta = {
  title: 'Themed/Divider',
  component: ThemedDivider,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemedDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: (args: DividerProps) => (
    <View className="p-4 gap-4">
      <Text className="font-bold">Horizontal Variants</Text>
      <View className="gap-2">
        <Text>Default</Text>
        <ThemedDivider {...args} alignment="horizontal" variant="default" />

        <Text>Block</Text>
        <ThemedDivider {...args} alignment="horizontal" variant="block" />

        <Text>Dashed</Text>
        <ThemedDivider {...args} alignment="horizontal" variant="dashed" />
      </View>

      <Text className="font-bold mt-4">Vertical Variants</Text>
      <View className="flex-row items-center gap-4 h-20">
        <Text>Default</Text>
        <ThemedDivider
          {...args}
          alignment="vertical"
          variant="default"
          size="50%"
        />

        <Text>Block</Text>
        <ThemedDivider
          {...args}
          alignment="vertical"
          variant="block"
          size="50%"
        />

        <Text>Dashed</Text>
        <ThemedDivider
          {...args}
          alignment="vertical"
          variant="dashed"
          size="50%"
        />
      </View>
    </View>
  ),
  args: {
    size: '100%',
  },
};
