import styled from '@emotion/styled';
import { HTMLAttributes, PropsWithChildren } from 'react';

import { layouts } from '@/styles/layouts';

type BottomLayoutProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function BottomLayout({
  children,
  ...restProps
}: BottomLayoutProps) {
  return <StyledBottomLayout {...restProps}>{children}</StyledBottomLayout>;
}

// styled
const StyledBottomLayout = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${layouts.deviceWidth};
`;
