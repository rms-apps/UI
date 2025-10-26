import { Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-native';
import {
  ThemedCheckbox,
  type ThemedCheckboxProps,
} from '@rms-apps/ui-themed-checkbox';

const meta: Meta<typeof ThemedCheckbox> = {
  title: 'Themed/Checkbox',
  component: ThemedCheckbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledExampleComponent = (args: ThemedCheckboxProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <View className="p-4 flex flex-col gap-4">
      <Text className="font-bold">Controlled Checkbox</Text>
      <Text>Status: {selected ? 'Selected' : 'Unselected'}</Text>

      <ThemedCheckbox
        {...args}
        isSelected={selected}
        onPress={() => setSelected(!selected)}
      />
    </View>
  );
};

export const ControlledExample: Story = {
  render: (args) => <ControlledExampleComponent {...args} />,
  args: {
    label: 'I agree to receive updates',
    labelInfo: 'We will not spam you',
    disabled: false,
  },
};

const CheckboxSizesComponent = (args: ThemedCheckboxProps) => {
  const sizes: ThemedCheckboxProps['size'][] = [16, 20, 24];

  const [selectedStates, setSelectedStates] = useState(
    sizes.reduce(
      (acc, size) => ({ ...acc, [size as number]: false }),
      {} as Record<number, boolean>,
    ),
  );

  const toggle = (size: number) => {
    setSelectedStates((prev) => ({ ...prev, [size]: !prev[size] }));
  };

  return (
    <View className="p-4 flex flex-col gap-6">
      <Text className="font-bold text-lg">Checkbox Sizes</Text>

      {sizes.map((size) => (
        <ThemedCheckbox
          key={size}
          {...args}
          size={size}
          isSelected={selectedStates[size as number]}
          onPress={() => toggle(size as number)}
          label={`Option ${size}`}
        />
      ))}
    </View>
  );
};

export const Sizes: Story = {
  render: (args: ThemedCheckboxProps) => <CheckboxSizesComponent {...args} />,
  args: {
    disabled: false,
    labelInfo: 'Sample info',
  },
};

const DisabledStateComponent = (args: ThemedCheckboxProps) => {
  const [selected, setSelected] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <View className="p-4 flex flex-col gap-4">
      <Text className="font-bold">Dynamic Disabled Checkbox</Text>

      <ThemedCheckbox
        {...args}
        isSelected={selected}
        disabled={isDisabled}
        onPress={() => setSelected(!selected)}
      />

      <View className="flex-row items-center gap-2 mt-4">
        <Pressable
          onPress={() => setIsDisabled(!isDisabled)}
          className="px-3 py-1 rounded bg-gray-200"
        >
          <Text>{isDisabled ? 'Enable Checkbox' : 'Disable Checkbox'}</Text>
        </Pressable>

        <Text className="ml-2">
          Current state: {isDisabled ? 'Disabled' : 'Enabled'}
        </Text>
      </View>
    </View>
  );
};

export const DisabledState: Story = {
  render: (args) => <DisabledStateComponent {...args} />,
  args: {
    label: 'This option is disabled',
    labelInfo: 'You cannot change this selection',
  },
};
