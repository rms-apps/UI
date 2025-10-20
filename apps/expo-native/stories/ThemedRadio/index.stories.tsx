/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { ThemedRadio, ThemedRadioProps } from '@rms-apps/ui-themed-radio';
import { ThemedText } from '@rms-apps/ui-themed-text';

const meta: Meta<typeof ThemedRadio> = {
  title: 'ThemedRadio',
  component: ThemedRadio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ControlledSingle: Story = {
  render: (args: ThemedRadioProps) => {
    const [selected, setSelected] = useState(false);

    return (
      <View className="p-4 gap-4">
        <ThemedRadio
          {...args}
          label={<ThemedText>Tap to Toggle</ThemedText>}
          selected={selected}
          onPress={() => setSelected((prev) => !prev)}
        />
      </View>
    );
  },
  args: { label: '', selected: true, onPress: () => {} },
};

export const RadioGroup: Story = {
  render: (args: ThemedRadioProps) => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
      <View className="p-4 gap-4">
        <ThemedRadio
          {...args}
          label={<ThemedText>Option 1</ThemedText>}
          selected={selectedValue === 'option1'}
          onPress={() => setSelectedValue('option1')}
        />
        <ThemedRadio
          {...args}
          label={<ThemedText>Option 2</ThemedText>}
          selected={selectedValue === 'option2'}
          onPress={() => setSelectedValue('option2')}
        />
        <ThemedRadio
          {...args}
          label={<ThemedText>Option 3 Direction Reversed</ThemedText>}
          selected={selectedValue === 'option3'}
          reverse
          onPress={() => setSelectedValue('option3')}
        />
      </View>
    );
  },
  args: { label: '', selected: true, onPress: () => {} },
};
