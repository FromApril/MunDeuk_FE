import { Location } from '@/interfaces/common';

type MapOption = {
  center?: Location; // 중심 좌표 (필수)
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

type MarkerOption = {
  map?: any; // 마커가 올라갈 지도 또는 로드뷰
  location: Location; //마커의 좌표 또는 로드뷰에서의 시점
  image?: any; //마커의 이미지
  title?: number | string; // 마커 엘리먼트의 타이틀 속성 값 (툴팁)
  draggable?: boolean; // 드래그 가능한 마커, 로드뷰에 올릴 경우에는 유효하지 않다
  clickable?: boolean; // 클릭 가능한 마커
  zIndex?: number; //마커 엘리먼트의 z-index 속성 값
  opacity?: number; //마커 투명도 (0-1)
  altitude?: number; //로드뷰에 올라있는 마커의 높이 값(m 단위)
  range?: number; //로드뷰 상에서 마커의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 마커는 로드뷰에서 보이지 않게 된다
};

export default function useKakaoMap() {
  const createMap = (mapId: string, location: Location, option?: MapOption) => {
    return new Promise((resolve, reject) => {
      window.kakao.maps.load(() => {
        const container = document.getElementById(mapId);
        const center = new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude,
        );

        const mapOption = {
          center,
          level: 3,
          ...option,
        };

        resolve(new window.kakao.maps.Map(container, mapOption));
      });
    });
  };

  const createMarker = (option: MarkerOption) => {
    const position = new window.kakao.maps.LatLng(
      option.location.latitude,
      option.location.longitude,
    );
    const markerOption = {
      ...option,
      position,
    };

    return new window.kakao.maps.Marker(markerOption);
  };

  return {
    createMap,
    createMarker,
  };
}
