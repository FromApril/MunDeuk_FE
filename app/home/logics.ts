import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import useKakaoMap from '@/hooks/useKakaoMap';
import useLocation from '@/hooks/useLocation';
import useMain from '@/hooks/useMain';
import { Note } from '@/interfaces/note';
import useMutationNotes from '@/queries/useMutationNotes';
import useNotes from '@/queries/useNotes';
import { debounce } from '@/utils/commonUtil';

export default function useHomePage() {
  const router = useRouter();
  const mapRef = useRef<any>();
  const markerIdsRef = useRef(new Set<number>());
  const clustererRef = useRef<any>();
  const [isInitMap, setIsInitMap] = useState(false);

  const {
    isLoading,
    isError,
    location,
    isEmptyLocation,
    getLocationByPosition,
  } = useLocation();
  const { createMap, createMarker } = useKakaoMap();
  const { main, setMain } = useMain();
  const { data: notes } = useNotes();
  const { mutate } = useMutationNotes();

  const goNotePickPage = (id: number) => {
    router.push(`/note/pick?id=${id}`);
  };

  const getMapLocation = () => {
    return isEmptyLocation(main.location) ? location : main.location;
  };

  const initMap = () => {
    const mapOption = {
      level: main.mapLevel,
      scrollwheel: true,
      keyboardShortcuts: true,
    };

    createMap('map', getMapLocation(), mapOption).then((map: any) => {
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
      addCenterChangedEvent(map);

      mapRef.current = map;
      clustererRef.current = clusterer;
    });
  };

  const addCenterChangedEvent = (map: any) => {
    window.kakao.maps.event.addListener(
      map,
      'center_changed',
      debounce(() => {
        const position = map.getCenter();
        const location = getLocationByPosition(position);

        setMain((prev) => ({
          ...prev,
          location,
        }));

        mutate(location, {
          onSuccess: ({ data: notes }) => {
            initMarkers(notes);
          },
        });
      }, 250),
    );
  };

  const addZoomChangeEvent = (map: any) => {
    window.kakao.maps.event.addListener(map, 'zoom_changed', () => {
      const mapLevel = map.getLevel();

      setMain((prev) => ({
        ...prev,
        mapLevel,
      }));
    });
  };

  const initMarkers = (notes: Note[]) => {
    const map = mapRef.current;

    notes.forEach((note) => {
      if (markerIdsRef.current.has(note.id)) return;

      const marker = getMarker(note);
      marker.setMap(map);

      if (clustererRef.current) {
        clustererRef.current.addMarker(marker);
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

    markerIdsRef.current.add(id);

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
    if (!notes || !isInitMap) return;

    initMarkers(notes);
  }, [isInitMap, notes]);

  return {
    isLoading,
    isError,
    initMap,
  };
}
