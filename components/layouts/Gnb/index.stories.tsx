import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';

import Gnb from './index';

const meta: Meta<typeof Gnb> = {
  title: 'Components/Layouts/Gnb',
  component: Gnb,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Gnb>;

export const Default: Story = {
  args: {},
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
};

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border: solid 1px #000;
  position: relative;

  & > nav {
    position: absolute;
  }
`;
