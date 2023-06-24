import { useEffect, useState } from 'react';

import useNaverMap from '@/hooks/useNaverMap';
import { LatLng } from '@/interfaces/naverMap';

export default function NaverMapPage() {
  return (
    <main>
      <NaverMap />
    </main>
  );
}

function NaverMap() {
  const [latLng, setLatLng] = useState<LatLng>({
    lat: -9999,
    lng: -9999,
  });

  const {
    mapRef,
    markersRef,
    createMarker,
    createMap,
    createMarkerClustering,
    createInfoWindow,
  } = useNaverMap();

  const isLoading = latLng.lat < 0 && latLng.lng < 0;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);

        const { latitude, longitude } = position.coords;

        setLatLng({
          lat: latitude,
          lng: longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (isLoading) return;
    if (mapRef.current) return;

    mapRef.current = createMap(latLng);

    // markers
    const marker1 = createMarker(latLng);
    const marker2 = createMarker(latLng);

    markersRef.current.push(marker1, marker2);
    markersRef.current.map((marker) => {
      marker.setMap(mapRef.current);

      const infoWindow = createInfoWindow();

      naver.maps.Event.addListener(marker, 'click', () => {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(mapRef.current as any, marker);
        }
      });
    });

    createMarkerClustering();
  }, [latLng]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div id="map" style={{ width: 700, height: 700 }} />
    </div>
  );
}
