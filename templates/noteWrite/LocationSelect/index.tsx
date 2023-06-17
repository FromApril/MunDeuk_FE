import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import BottomLayout from '@/components/layouts/BottomLayout';
import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';

export default function LocationSelect() {
  const router = useRouter();

  const goNextPage = () => router.push('/noteWrite?page=2');

  return (
    <PageContainer>
      <Navigation isBack title="위치 설정" />
      <BottomLayout>
        <Button variant="primary" onClick={goNextPage}>
          다음
        </Button>
      </BottomLayout>
    </PageContainer>
  );
}
