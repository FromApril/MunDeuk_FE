import { useRecoilValue } from 'recoil';

import { Location } from '@/interfaces/common';
import { userAtom } from '@/recoil/user/atoms';

export default function useLocation() {
  const { location } = useRecoilValue(userAtom);
  const { latitude, longitude } = location;

  const isEmptyLocation = (location: Location) => {
    const { latitude, longitude } = location;

    return latitude === 0 && longitude === 0;
  };

  const isLoading = isEmptyLocation(location);
  const isError = latitude === -1 && longitude === -1;

  return {
    location,
    isLoading,
    isError,
    isEmptyLocation,
  };
}
