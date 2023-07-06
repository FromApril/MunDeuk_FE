import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
    children: 'Dashed',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    children: 'Disabled',
    disabled: true,
  },
};
