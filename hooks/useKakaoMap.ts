import { Location } from '@/interfaces/common';

type MapOption = {
  center: Location; // 중심 좌표 (필수)
  level?: number; // (기본값: 3)
  mapTypeId?: string; // 지도 종류 (기본값: 일반 지도)
  draggable?: boolean; // 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부
  scrollwheel?: boolean; // 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
  disableDoubleClick?: boolean; // 더블클릭 이벤트 및 더블클릭 확대 가능 여부
  disableDoubleClickZoom?: boolean; // 더블클릭 확대 가능 여부
  projectionId?: string; // (기본값: kakao.maps.ProjectionId.WCONG)
  tileAnimation?: boolean; // 지도 타일 애니메이션 설정 여부 (기본값: true)
  keyboardShortcuts?: boolean; // 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)
};

export default function useKakaoMap() {
  const createMap = (
    mapId: string,
    location: Location,
    options?: MapOption,
  ) => {
    window.kakao.maps.load(() => {
      const container = document.getElementById(mapId);
      const defaultOptions = {
        center: new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude,
        ),
        level: 3,
      };

      new window.kakao.maps.Map(container, options || defaultOptions);
    });
  };

  return {
    createMap,
  };
}
