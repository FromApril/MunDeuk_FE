import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

import { layouts } from '@/styles/layouts';

import Gnb from '../Gnb';

export default function PageLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  const isShowGnb =
    router.pathname === '/home' || router.pathname === '/myPage';

  return (
    <StyledPageLayout>
      {children}
      {isShowGnb && <Gnb />}
    </StyledPageLayout>
  );
}

const StyledPageLayout = styled.div`
  margin: 0 auto;
  height: 100vh;

  @media screen and (min-width: ${layouts.deviceWidth}) {
    width: ${layouts.deviceWidth};
    border-left: solid 1px #000;
    border-right: solid 1px #000;
  }
`;
