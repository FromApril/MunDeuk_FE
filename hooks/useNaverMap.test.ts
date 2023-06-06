import { renderHook } from '@testing-library/react';

// import useNaverMap from './useNaverMap';

describe('useNaverMap', () => {
  it('deprecated 되었음', () => {
    expect(true);
  });
});

// describe('useNaverMap', () => {
//   const { result } = renderHook(() => useNaverMap());

//   it('mapRef의 초기값은 null 이다.', () => {
//     expect(result.current.mapRef.current).toBe(null);
//   });

//   it('markerRef의 초기값은 빈 배열 이다.', () => {
//     expect(result.current.markersRef.current).toEqual([]);
//   });

//   it('createMap 함수를 반환한다.', () => {
//     expect(typeof result.current.createMap).toBe('function');
//   });

//   it('createMarker 함수를 반환한다.', () => {
//     expect(typeof result.current.createMarker).toBe('function');
//   });

//   it('createMarkerClustering 함수를 반환한다.', () => {
//     expect(typeof result.current.createMarkerClustering).toBe('function');
//   });

//   it('createInfoWindow 함수를 반환한다.', () => {
//     expect(typeof result.current.createInfoWindow).toBe('function');
//   });
// });
