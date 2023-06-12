import React, { Suspense, useEffect, useState } from 'react';

import ApiErrorBoundary from '@/components/layouts/ApiErrorBoundary';
import { LatLng } from '@/interfaces/naverMap';

export default function KakaoMapPage() {
  return (
    <main>
      <ApiErrorBoundary>
        <Suspense fallback={<div>loading...</div>}>
          <KakaoMap />
        </Suspense>
      </ApiErrorBoundary>
    </main>
  );
}

function KakaoMap() {
  const [latLng, setLatLng] = useState<LatLng>({
    lat: -9999,
    lng: -9999,
  });

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
    if (!isLoading) {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(latLng.lat, latLng.lng),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
      });
    }
  }, [latLng]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div id="map" style={{ width: 400, height: 400 }} />
    </div>
  );
}
