import { Meta, StoryObj } from '@storybook/react-native';
import { Text, View, ScrollView, Alert } from 'react-native';
import { ThemedButton, ThemedButtonProps } from '@rms-apps/ui-themed-button';

const meta = {
  title: 'ThemedButton',
  component: ThemedButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllCombinations: Story = {
  render: (args: ThemedButtonProps) => {
    const types: ThemedButtonProps['type'][] = ['filled', 'hollow', 'gradient'];
    const variants: ThemedButtonProps['variant'][] = [
      'primary',
      'secondary',
      'tertiary',
    ];
    const sizes: ThemedButtonProps['size'][] = ['small', 'medium', 'large'];

    const handlePress = (type?: string, variant?: string, size?: string) => {
      Alert.alert(
        'Button Clicked',
        `Type: ${type}\nVariant: ${variant}\nSize: ${size}`,
      );
    };

    return (
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="font-bold text-lg mb-4">All Button Combinations</Text>

        {types.map((type, index) => (
          <View key={type} className="w-full">
            <Text className="font-semibold text-base capitalize mb-3">
              {`Type: ${type}`}
            </Text>

            {variants.map((variant) => (
              <View
                key={`${type}-${variant}`}
                className="flex flex-row flex-wrap gap-3 mb-3 w-full"
              >
                {sizes.map((size) => (
                  <ThemedButton
                    key={`${type}-${variant}-${size}`}
                    {...args}
                    type={type}
                    variant={variant}
                    size={size}
                    title={`${variant} • ${size}`}
                    onPress={() => handlePress(type, variant, size)}
                  />
                ))}
              </View>
            ))}

            {index < types.length - 1 && (
              <View className="h-[1px] bg-gray-600 my-4 opacity-40" />
            )}
          </View>
        ))}

        <View className="h-8" />
      </ScrollView>
    );
  },
  args: {
    title: '',
    disabled: false,
  },
};
