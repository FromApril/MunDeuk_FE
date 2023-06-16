import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { userAtom } from '@/recoil/user/atoms';
import { layouts } from '@/styles/layouts';

export default function HomePage() {
  const { location } = useRecoilValue(userAtom);
  const { latitude, longitude } = location;
  const isLoading = latitude < 0 && longitude < 0;

  useEffect(() => {
    if (isLoading) return;

    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      new window.kakao.maps.Map(container, options);
    });
  }, [location]);

  return <MainMap id="map" />;
}

// styled
const MainMap = styled.div`
  height: calc(100vh - ${layouts.gnb});
`;
