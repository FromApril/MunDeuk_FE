import { usePathname, useRouter } from 'next/navigation';

import useGeoLocation from '@/hooks/useGeoLocation';
import useLoading from '@/hooks/useLoading';

export default function usePageLayout() {
  useGeoLocation();

  // const router = useRouter();
  const pathname = usePathname();
  const { isLoading } = useLoading();

  const isShowGnb = pathname === '/home' || pathname === '/myPage';
  null;

  return {
    isShowGnb,
    isLoading,
  };
}
