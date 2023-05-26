import { useRef } from 'react';

import { LatLng } from '@/interfaces/naverMap';

export default function useNaverMap() {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markersRef = useRef<naver.maps.Marker[]>([]);

  const createMap = (latLng: LatLng) => {
    return new naver.maps.Map('map', {
      center: latLng,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_LEFT,
        style: naver.maps.ZoomControlStyle.SMALL,
      },
    });
  };

  const createMarker = (latLng: LatLng) => {
    const randomValue = Math.random() * 0.002;

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng({
        lat: latLng.lat + randomValue,
        lng: latLng.lng + randomValue,
      }),
    });

    return marker;
  };

  const createMarkerClustering = () => {
    const marker = {
      content: [
        `<div style='width: 40px; height: 40px; border-radius: 50%;  background: #0E8A16;
                     display: flex; align-items: center; justify-content: center'>`,
        `<span style='color: white; font-size: 0.875rem'>1</span>`,
        `</div>`,
      ].join(''),
      size: new naver.maps.Size(40, 40),
      anchor: new naver.maps.Point(20, 20),
    };

    import('@/libs/naverMap/markerClustering.js').then(
      ({ MarkerClustering }) => {
        new MarkerClustering({
          minClusterSize: 2,
          maxZoom: 15,
          map: mapRef.current,
          markers: markersRef.current,
          disableClickZoom: false,
          gridSize: 120,
          icons: [marker],
          indexGenerator: [10, 100, 200, 500, 1000],
          stylingFunction: function (clusterMarker: any, count: number) {
            console.log(clusterMarker);
            clusterMarker.getElement().querySelector('span').textContent =
              count;
          },
        });
      },
    );
  };

  const createInfoWindow = () => {
    const contentString = [
      '<div class="iw_inner">',
      '<h1>' + 'Random - ' + Math.random() * 100 + '</h1>',
      '</div>',
    ].join('');

    return new naver.maps.InfoWindow({
      content: contentString,
    });
  };

  return {
    mapRef,
    markersRef,
    createMap,
    createMarker,
    createMarkerClustering,
    createInfoWindow,
  };
}
