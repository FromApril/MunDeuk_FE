import { useRecoilValue } from 'recoil';

import { userAtom } from '@/recoil/user/atoms';

export default function useLocation() {
  const { location } = useRecoilValue(userAtom);
  const { latitude, longitude } = location;

  const isLoading = latitude === 0 && longitude === 0;
  const isError = latitude === -1 && longitude === -1;

  return {
    location,
    isLoading,
    isError,
  };
}
