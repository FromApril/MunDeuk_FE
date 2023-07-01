import { useRouter } from 'next/router';

import useGeoLocation from '@/hooks/useGeoLocation';
import useLoading from '@/hooks/useLoading';

export default function usePageLayout() {
  useGeoLocation();

  const router = useRouter();
  const { isLoading } = useLoading();

  const isShowGnb =
    router.pathname === '/home' || router.pathname === '/myPage';

  return {
    isShowGnb,
    isLoading,
  };
}
