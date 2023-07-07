import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';

import MapLoading from './index';

const meta: Meta<typeof MapLoading> = {
  title: 'Components/Common/MapLoading',
  component: MapLoading,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MapLoading>;

export const Default: Story = {
  args: {},
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
};

const Wrapper = styled.div`
  & > div {
    width: 500px;
    height: 500px;
  }
`;
