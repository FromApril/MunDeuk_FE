import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';

import Navigation from './index';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Layouts/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Back: Story = {
  args: {},
  decorators: [
    () => (
      <Navigation>
        <Navigation.Back />
      </Navigation>
    ),
  ],
};

export const Title: Story = {
  decorators: [
    () => (
      <Navigation>
        <Navigation.Title>타이틀</Navigation.Title>
      </Navigation>
    ),
  ],
};

export const Complete: Story = {
  decorators: [
    () => (
      <Navigation>
        <Navigation.Complete onClick={() => console.log('complete')} />
      </Navigation>
    ),
  ],
};

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border: solid 1px #000;
`;
