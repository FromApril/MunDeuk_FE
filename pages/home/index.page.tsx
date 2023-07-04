import styled from '@emotion/styled';

import MapLoading from '@/components/common/MapLoading';
import PageContainer from '@/components/layouts/PageContainer';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

import useHomePage from './logics';

export default function HomePage() {
  const { isLoading, isError } = useHomePage();

  if (isLoading || isError) {
    return <MapLoading />;
  }

  if (isError) {
    return (
      <PageContainer>
        <ErrorMessage>페이지를 불러오는데 실패했습니다.</ErrorMessage>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Map id="map" />
    </PageContainer>
  );
}

const Map = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.gnb});
`;

const ErrorMessage = styled.div`
  ${positionAbsoluteXYCenter};
`;
