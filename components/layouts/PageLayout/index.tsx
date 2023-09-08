import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import Loading from '@/components/common/Loading';
import { layouts } from '@/styles/layouts';

import Gnb from '../Gnb';
import usePageLayout from './logics';

export default function PageLayout({ children }: PropsWithChildren) {
  const { isShowGnb, isLoading } = usePageLayout();

  return (
    <StyledPageLayout>
      {children}
      {isShowGnb && <Gnb />}
      {isLoading && <Loading />}
    </StyledPageLayout>
  );
}

export const StyledPageLayout = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  position: relative;

  @media screen and (min-width: ${layouts.deviceWidth}) {
    width: ${layouts.deviceWidth};
    border-left: solid 1px #000;
    border-right: solid 1px #000;
  }
`;
