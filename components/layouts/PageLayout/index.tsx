import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import useGeoLocation from '@/hooks/useGeoLocation';
import { layouts } from '@/styles/layouts';

import Gnb from '../Gnb';

export default function PageLayout({ children }: PropsWithChildren) {
  useGeoLocation();

  return (
    <StyledPageLayout>
      {children}
      <GnbContainer />
    </StyledPageLayout>
  );
}

function GnbContainer() {
  const router = useRouter();

  const isShowGnb =
    router.pathname === '/home' || router.pathname === '/myPage';

  if (!isShowGnb) return null;

  return <Gnb />;
}

// styled
const StyledPageLayout = styled.div`
  margin: 0 auto;
  min-height: 100vh;

  @media screen and (min-width: ${layouts.deviceWidth}) {
    width: ${layouts.deviceWidth};
    border-left: solid 1px #000;
    border-right: solid 1px #000;
  }
`;
