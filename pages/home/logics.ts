import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import useNotes from '@/hooks/queries/useNotes';
import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import { Note } from '@/interfaces/note';

export default function useHomePage() {
  const router = useRouter();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>();
  const { isLoading, isError, location } = useLocation();
  const { createMap, createMarker } = useKakaoMap();
  const { data: notes } = useNotes();

  const isHasMapImage = mapRef.current?.childElementCount;

  const goNotePickPage = (id: number) => {
    router.push(`/note/pick?id=${id}`);
  };

  const addMarkerClickEvent = (marker: any) => {
    window.kakao.maps.event.addListener(marker, 'click', function () {
      const id = marker.getTitle();

      goNotePickPage(id);
    });
  };

  const initMap = () => {
    createMap('map', location, 1).then((res: any) => {
      const map = res;

      map.setMinLevel(1);
      map.setMaxLevel(12);
      mapInstanceRef.current = map;
    });
  };

  const initMarkers = (notes: Note[]) => {
    const map = mapInstanceRef.current;

    notes.forEach((note) => {
      const { latitude: lat, longitude: long, id } = note;

      // test
      const { latitude, longitude } = location;

      const marker = createMarker({
        location: {
          latitude: latitude + Math.random() * 0.001,
          longitude: longitude + Math.random() * 0.001,
        },
        title: id,
      });

      addMarkerClickEvent(marker);
      marker.setMap(map);
    });
  };

  // 맵 초기화
  useEffect(() => {
    if (isLoading) return;
    if (mapInstanceRef.current) return;

    initMap();
  }, [location]);

  // 맵 초기화 & 쪽지리스트 API 성공 후, 마커 삽입
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    if (!notes) return;

    initMarkers(notes);
  }, [mapInstanceRef.current, notes]);

  return {
    mapRef,
    isLoading,
    isError,
    isHasMapImage,
    initMap,
  };
}
