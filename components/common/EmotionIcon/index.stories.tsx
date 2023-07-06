import type { Meta, StoryObj } from '@storybook/react';

import { emotionColors } from '@/styles/colors';

import EmotionIcon from './index';

const meta: Meta<typeof EmotionIcon> = {
  title: 'Components/Common/EmotionIcon',
  component: EmotionIcon,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof EmotionIcon>;

export const Default: Story = {
  args: {
    name: 'Default',
    width: 50,
    height: 50,
    fill: emotionColors.Default,
  },
};

export const Depressed: Story = {
  args: {
    ...Default.args,
    name: 'Depressed',
    fill: emotionColors.Depressed,
  },
};

export const Flutter: Story = {
  args: {
    ...Default.args,
    name: 'Flutter',
    fill: emotionColors.Flutter,
  },
};

export const Glad: Story = {
  args: {
    ...Default.args,
    name: 'Glad',
    fill: emotionColors.Glad,
  },
};

export const Touched: Story = {
  args: {
    ...Default.args,
    name: 'Touched',
    fill: emotionColors.Touched,
  },
};
