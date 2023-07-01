import { useRecoilState } from 'recoil';

import { isLoadingAtom } from '@/recoil/loading/atoms';

export default function useLoading() {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);

  const showLoading = () => setIsLoading(true);

  const hideLoading = () => setIsLoading(false);

  return {
    isLoading,
    showLoading,
    hideLoading,
  };
}
