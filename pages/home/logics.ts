import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import { Note } from '@/interfaces/note';
import useMutationNotes from '@/queries/useMutationNotes';
import useNotes from '@/queries/useNotes';

export default function useHomePage() {
  const router = useRouter();
  const mapRef = useRef<any>();
  const markerIdsRef = useRef(new Set<number>());
  const clustererRef = useRef<any>();
  const [isInitMap, setIsInitMap] = useState(false);

  const { isLoading, isError, location } = useLocation();
  const { createMap, createMarker } = useKakaoMap();
  const { data: notes } = useNotes();
  const { mutate } = useMutationNotes();

  const goNotePickPage = (id: number) => {
    router.push(`/note/pick?id=${id}`);
  };

  const initMap = () => {
    const mapOption = {
      level: 1,
      scrollwheel: true,
      keyboardShortcuts: true,
    };

    createMap('map', location, mapOption).then((map: any) => {
      const zoomControl = new window.kakao.maps.ZoomControl();
      const clusterer = new window.kakao.maps.MarkerClusterer({
        map,
        averageCenter: true,
        minLevel: 7,
      });

      map.setMinLevel(1);
      map.setMaxLevel(12);
      map.addControl(
        zoomControl,
        window.kakao.maps.ControlPosition.BOTTOMRIGHT,
      );

      addZoomChangeEvent(map);

      mapRef.current = map;
      clustererRef.current = clusterer;
    });
  };

  const addZoomChangeEvent = (map: any) => {
    window.kakao.maps.event.addListener(map, 'zoom_changed', () => {
      const position = map.getCenter();
      const location = {
        latitude: position.La,
        longitude: position.Ma,
      };

      mutate(location, {
        onSuccess: ({ data: notes }) => {
          initMarkers(notes);
        },
      });
    });
  };

  const initMarkers = (notes: Note[]) => {
    const map = mapRef.current;

    notes.forEach((note) => {
      const marker = getMarker(note);

      if (marker) {
        marker.setMap(map);

        if (clustererRef.current) {
          clustererRef.current.addMarker(marker);
        }
      }
    });
  };

  const getEmotionSvg = (emotion: Note['content']['emotion']) => {
    if (emotion === 'Depressed') {
      return 'depressed.svg';
    }

    if (emotion === 'Flutter') {
      return 'flutter.svg';
    }

    if (emotion === 'Glad') {
      return 'glad.svg';
    }

    if (emotion === 'Touched') {
      return 'touched.svg';
    }

    return 'default.svg';
  };

  const getMarker = (note: Note) => {
    const { latitude, longitude, id, content } = note;

    if (markerIdsRef.current.has(id)) {
      return null;
    } else {
      markerIdsRef.current.add(id);
    }

    const imageType = getEmotionSvg(content.emotion);
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
        latitude: latitude,
        longitude: longitude,
      },
      title: id,
      image: markerImage,
    });

    addMarkerClickEvent(marker);

    return marker;
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
    if (mapRef.current) return;

    initMap();
    setIsInitMap(true);
  }, [location]);

  // 맵 초기화 & 쪽지리스트 API 성공 후, 마커 삽입
  useEffect(() => {
    if (!notes) return;

    initMarkers(notes);
  }, [isInitMap, notes]);

  return {
    isLoading,
    isError,
    initMap,
  };
}
