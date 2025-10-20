import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { ThemedSwitch, ThemedSwitchProps } from '@rms-apps/ui-themed-switch';

const meta = {
  title: 'ThemedSwitch',
  component: ThemedSwitch,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemedSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledExampleComponent = (args: ThemedSwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View className="p-4 flex flex-col gap-4">
      <Text className="font-bold">Controlled Switch</Text>
      <Text>Status: {isEnabled ? 'ON' : 'OFF'}</Text>
      <ThemedSwitch {...args} value={isEnabled} onValueChange={setIsEnabled} />
    </View>
  );
};

export const ControlledExample: Story = {
  render: (args) => <ControlledExampleComponent {...args} />,
  args: {
    value: true,
    disabled: false,
    onValueChange: () => {},
  },
};

const ThemedSwitchComponent = (args: ThemedSwitchProps) => {
  const sizes: ThemedSwitchProps['size'][] = ['small', 'medium', 'large'];
  const [values, setValues] = useState(
    sizes.reduce(
      (acc, size) => ({ ...acc, [size as string]: true }),
      {} as Record<string, boolean>,
    ),
  );

  const toggle = (size: string) => {
    setValues((prev) => ({ ...prev, [size]: !prev[size] }));
  };

  return (
    <View className="p-4 flex flex-col gap-6">
      <Text className="font-bold text-lg">Switch Sizes</Text>

      {sizes.map((size) => (
        <View
          key={size}
          className="flex flex-row items-center justify-between w-full"
        >
          <Text className="capitalize text-base">{size}</Text>
          <ThemedSwitch
            {...args}
            size={size}
            value={values[size as string]}
            onValueChange={() => toggle(size as string)}
          />
        </View>
      ))}
    </View>
  );
};

export const Sizes: Story = {
  render: (args: ThemedSwitchProps) => <ThemedSwitchComponent {...args} />,
  args: {
    value: false,
    onValueChange: () => {},
  },
};

const DisabledStateComponent = (args: ThemedSwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <View className="p-4 flex flex-col gap-4">
      <Text className="font-bold text-lg">Dynamic Disabled Switch</Text>

      <ThemedSwitch
        {...args}
        value={isEnabled}
        disabled={isDisabled}
        onValueChange={setIsEnabled}
      />

      <View className="flex-row items-center gap-2 mt-4">
        <Pressable
          onPress={() => setIsDisabled(!isDisabled)}
          className="px-3 py-1 rounded bg-gray-200"
        >
          <Text>{isDisabled ? 'Enable Switch' : 'Disable Switch'}</Text>
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
    value: false,
    onValueChange: () => {},
  },
};
