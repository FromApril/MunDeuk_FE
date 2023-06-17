import styled from '@emotion/styled';
import { useEffect } from 'react';

import MapLoading from '@/components/common/MapLoading';
import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import { layouts } from '@/styles/layouts';

export default function HomePage() {
  const { createMap, createMarker } = useKakaoMap();
  const { isLoading, isError, location } = useLocation();

  useEffect(() => {
    if (isLoading) return;

    createMap('map', location).then((res) => {
      const map = res;
      const marker = createMarker(location);

      marker.setMap(map);
    });
  }, [location]);

  if (isLoading || isError) {
    return <MapLoading />;
  }

  return <Map id="map" />;
}

// styled
const Map = styled.div`
  height: calc(100vh - ${layouts.gnb});
`;
