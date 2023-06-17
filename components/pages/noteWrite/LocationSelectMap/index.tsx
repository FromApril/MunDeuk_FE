import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';

import MapLoading from '@/components/common/MapLoading';
import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import { layouts } from '@/styles/layouts';

export default function LocationSelectMap() {
  const { isLoading, isError, location } = useLocation();
  const { createMap } = useKakaoMap();

  useEffect(() => {
    if (isLoading) return;

    createMap('map', location);
  }, [location]);

  if (isLoading || isError) {
    return <MapLoading css={loadingCss} />;
  }

  return <Map id="map" />;
}

const loadingCss = css`
  height: calc(100vh - ${layouts.button} * 2);
`;

const Map = styled.div`
  height: calc(100vh - ${layouts.button} * 2);
`;
