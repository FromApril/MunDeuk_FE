import type { Meta, StoryObj } from '@storybook/react';

import Icon from './index';

const meta: Meta<typeof Icon> = {
  title: 'Components/Common/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const ArrowRight: Story = {
  args: {
    name: 'ArrowRight',
    width: 50,
    height: 50,
  },
};

export const Camera: Story = {
  args: {
    ...ArrowRight.args,
    name: 'Camera',
  },
};

export const Close: Story = {
  args: {
    ...ArrowRight.args,
    name: 'Close',
  },
};

export const Music: Story = {
  args: {
    ...ArrowRight.args,
    name: 'Music',
  },
};

export const Text: Story = {
  args: {
    ...ArrowRight.args,
    name: 'Text',
  },
};
