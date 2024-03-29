import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';
import BottomButton from '@/components/pages/noteWrite/BottomButton';
import LocationSelectMap from '@/components/pages/noteWrite/LocationSelectMap';

export default function LocationSelect() {
  return (
    <PageContainer>
      <Navigation>
        <Navigation.Back />
        <Navigation.Title>위치 설정</Navigation.Title>
      </Navigation>
      <LocationSelectMap />
      <BottomButton variant="primary" nextUrl="/noteWrite?page=2">
        다음
      </BottomButton>
    </PageContainer>
  );
}
