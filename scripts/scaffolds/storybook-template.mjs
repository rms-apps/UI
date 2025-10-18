// @ts-check

import { pascalToKebab } from './package.config.mjs';

/**
 * @param {string} componentName
 */
export const createStorybookFile = (componentName) => `
import { Text, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { ${componentName}, ${componentName}Props } from '@rms-apps/ui-${pascalToKebab(componentName)}';

const meta = {
  title: '${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ${componentName}Props) => (
    <View className="p-2 flex flex-col gap-2">
      <Text className="bold">Default Story</Text>
        <${componentName} {...args} />
    </View>
  ),
  args: {
  },
};
`;
