import styled from '@emotion/styled';
import { useEffect } from 'react';

import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import { layouts } from '@/styles/layouts';

export default function LocationSelectMap() {
  const { isLoading, location } = useLocation();
  const { createMap } = useKakaoMap();

  useEffect(() => {
    if (isLoading) return;

    createMap('map', location);
  }, [location]);

  return <KakaoMap id="map" />;
}

const KakaoMap = styled.div`
  height: calc(100vh - ${layouts.button} * 2);
`;
