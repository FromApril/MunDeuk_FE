import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import { locationAtom } from '@/recoil/noteWrite/atoms';

export default function useLocationSelectMap() {
  const MAP_MAX_LEVEL = 4;

  const { isLoading, isError, location, getLocationByPosition } = useLocation();
  const { createMap, createMarker } = useKakaoMap();
  const setLocation = useSetRecoilState(locationAtom);

  const initMarker = (map: any) => {
    const marker = createMarker({ location });

    marker.setMap(map);
    marker.setDraggable(true);
    setLocation(location);

    window.kakao.maps.event.addListener(marker, 'dragend', () => {
      const position = marker.getPosition();
      const location = getLocationByPosition(position);

      console.log(location);

      setLocation(location);
    });
  };

  useEffect(() => {
    if (isLoading) return;

    createMap('map', location).then((map: any) => {
      map.setMinLevel(1);
      map.setMaxLevel(MAP_MAX_LEVEL);

      initMarker(map);
    });
  }, [location]);

  return {
    isLoading,
    isError,
  };
}
