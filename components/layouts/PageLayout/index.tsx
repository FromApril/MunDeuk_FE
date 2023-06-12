import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

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
  width: 375px;
  height: 100vh;
  border-left: solid 1px #000;
  border-right: solid 1px #000;
`;
