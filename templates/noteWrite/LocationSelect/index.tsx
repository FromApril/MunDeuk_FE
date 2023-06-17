import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import BottomLayout from '@/components/layouts/BottomLayout';
import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';
import LocationSelectMap from '@/components/pages/noteWrite/LocationSelectMap';

export default function LocationSelect() {
  return (
    <PageContainer>
      <Navigation isBack title="위치 설정" />
      <LocationSelectMap />
      <BottomButton />
    </PageContainer>
  );
}

function BottomButton() {
  const router = useRouter();

  const goNextPage = () => router.push('/noteWrite?page=2');

  return (
    <BottomLayout>
      <Button variant="primary" onClick={goNextPage}>
        다음
      </Button>
    </BottomLayout>
  );
}
