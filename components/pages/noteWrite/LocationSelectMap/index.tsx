import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import MapLoading from '@/components/common/MapLoading';
import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import { locationAtom } from '@/recoil/noteWrite/atoms';
import { layouts } from '@/styles/layouts';

export default function LocationSelectMap() {
  const { isLoading, isError, location } = useLocation();
  const { createMap, createMarker } = useKakaoMap();
  const setLocation = useSetRecoilState(locationAtom);

  useEffect(() => {
    if (isLoading) return;

    createMap('map', location, 1).then((res: any) => {
      const map = res;
      const marker = createMarker(location);

      map.setMinLevel(1);
      map.setMaxLevel(1);
      marker.setMap(map);
      marker.setDraggable(true);

      window.kakao.maps.event.addListener(marker, 'dragend', function () {
        const location = marker.getPosition();

        console.log(location.La, location.Ma);

        setLocation({
          latitude: location.La,
          longitude: location.Ma,
        });
      });
    });
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
