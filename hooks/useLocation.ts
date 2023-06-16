import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { userAtom } from '@/recoil/user/atoms';

export default function useLocation() {
  const [_, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    // TODO: 실패했을 때 액션
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);

        const { latitude, longitude } = position.coords;
        const location = {
          latitude,
          longitude,
        };

        setUser({
          location,
        });
      });
    }
  }, []);
}
