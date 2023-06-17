import styled from '@emotion/styled';
import { useEffect } from 'react';

import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import { layouts } from '@/styles/layouts';

export default function HomePage() {
  const { createMap } = useKakaoMap();
  const { isLoading, location } = useLocation();

  useEffect(() => {
    if (isLoading) return;

    createMap('map', location);
  }, [location]);

  return <MainMap id="map" />;
}

// styled
const MainMap = styled.div`
  height: calc(100vh - ${layouts.gnb});
`;
