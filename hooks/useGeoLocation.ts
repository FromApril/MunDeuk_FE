import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { userAtom } from '@/recoil/user/atoms';

export default function useGeoLocation() {
  const setUser = useSetRecoilState(userAtom);

  const handleSuccess = (position: GeolocationPosition) => {
    console.log(position.coords.latitude, position.coords.longitude);

    const { latitude, longitude } = position.coords;
    const location = {
      latitude,
      longitude,
    };

    setUser((prev) => ({
      ...prev,
      location,
    }));
  };

  const handleError = (error: GeolocationPositionError) => {
    window.alert(
      `위치정보를 가져오는데 실패했습니다.\n(에러사유 : ${error.message})`,
    );

    console.error(error);

    setUser((prev) => ({
      ...prev,
      location: {
        latitude: -1,
        longitude: -1,
      },
    }));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, []);
}
