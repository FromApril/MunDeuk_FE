import { useEffect, useRef } from 'react';

import useNotes from '@/hooks/queries/useNotes';
import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';

export default function useHomePage() {
  const mapRef = useRef<any>();
  const { createMap, createMarker } = useKakaoMap();
  const { isLoading, isError, location } = useLocation();
  const { data: notes } = useNotes();

  // 맵 초기화
  useEffect(() => {
    if (isLoading) return;
    if (mapRef.current) return;

    createMap('map', location, 1).then((res: any) => {
      const map = res;
      // const marker = createMarker(location);

      map.setMinLevel(1);
      map.setMaxLevel(12);

      mapRef.current = map;
      // marker.setMap(map);
    });
  }, [location]);

  // 맵 초기화 & 쪽지리스트 API 성공 후, 마커 삽입
  useEffect(() => {
    if (!mapRef.current) return;
    if (!notes) return;

    const map = mapRef.current;

    console.log(notes);

    notes.forEach((note, idx) => {
      const { latitude, longitude, id } = note;

      console.log(`note ${idx}`);
      console.log(note);

      const marker = createMarker(
        {
          latitude: 37.483 + Math.random() * 0.001,
          longitude: 126.918 + Math.random() * 0.001,
        },
        {
          title: id,
        },
      );

      marker.setMap(map);
    });
  }, [mapRef.current, notes]);

  return {
    isLoading,
    isError,
  };
}
