import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';

import Loading from './index';

const meta: Meta<typeof Loading> = {
  title: 'Components/Common/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
};

const Wrapper = styled.div`
  width: 500px;
  height: 500px;

  & > div {
    position: relative;
  }
`;
