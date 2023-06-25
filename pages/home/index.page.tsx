import styled from '@emotion/styled';

import MapLoading from '@/components/common/MapLoading';
import PageContainer from '@/components/layouts/PageContainer';
import { layouts } from '@/styles/layouts';

import useHomePage from './logics';

export default function HomePage() {
  const { isLoading, isError } = useHomePage();

  if (isLoading || isError) {
    return <MapLoading />;
  }

  return (
    <PageContainer>
      <Map id="map" />
    </PageContainer>
  );
}

const Map = styled.div`
  height: calc(100vh - ${layouts.gnb});
`;
