// @ts-check

/**
 * @param {string} componentName
 */
export const createStorybookFile = (componentName) => `
import { Meta, StoryObj } from '@storybook/react-native';

import { ${componentName} } from '@rms-apps/ui-${componentName}';

const meta = {
  title: '${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello I am  ${componentName}',
  },
};
`;
