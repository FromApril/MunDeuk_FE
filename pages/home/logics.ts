import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import useNotes from '@/hooks/queries/useNotes';
import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import { Note } from '@/interfaces/note';

export default function useHomePage() {
  const router = useRouter();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>();
  const [isInitMap, setIsInitMap] = useState(false);
  const { isLoading, isError, location } = useLocation();
  const { createMap, createMarker } = useKakaoMap();
  const { data: notes } = useNotes();

  const isHasMapImage = mapRef.current?.childElementCount;

  const goNotePickPage = (id: number) => {
    router.push(`/note/pick?id=${id}`);
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
    console.log('initMarkers');

    const map = mapInstanceRef.current;

    notes.forEach((note, idx) => {
      // const { latitude, longitude, id } = note;
      const { id } = note;
      const { latitude, longitude } = location;

      const imageType =
        idx % 4 === 0
          ? 'depressed.svg'
          : idx % 4 === 1
          ? 'flutter.svg'
          : idx % 4 === 2
          ? 'glad.svg'
          : idx % 4 === 3
          ? 'touched.svg'
          : '';

      const imageSrc = window.location.origin + '/images/' + imageType;
      const imageSize = new window.kakao.maps.Size(30, 30);
      const imageOption = { offset: new window.kakao.maps.Point(30, 30) };

      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      const marker = createMarker({
        location: {
          latitude: latitude + Math.random() * 0.001,
          longitude: longitude + Math.random() * 0.001,
        },
        title: id,
        image: markerImage,
      });

      addMarkerClickEvent(marker);
      marker.setMap(map);
    });
  };

  const addMarkerClickEvent = (marker: any) => {
    window.kakao.maps.event.addListener(marker, 'click', function () {
      const id = marker.getTitle();

      goNotePickPage(id);
    });
  };

  // 맵 초기화
  useEffect(() => {
    if (isLoading) return;
    if (mapInstanceRef.current) return;

    initMap();
    setIsInitMap(true);
  }, [location]);

  // 맵 초기화 & 쪽지리스트 API 성공 후, 마커 삽입
  useEffect(() => {
    if (!notes) return;
    if (!isInitMap) return;

    initMarkers(notes);
  }, [isInitMap, notes]);

  return {
    mapRef,
    isLoading,
    isError,
    isHasMapImage,
    initMap,
  };
}
