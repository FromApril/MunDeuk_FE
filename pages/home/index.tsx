import styled from '@emotion/styled';

import MapLoading from '@/components/common/MapLoading';
import { layouts } from '@/styles/layouts';

import useHome from './logics';

export default function HomePage() {
  const { isLoading, isError } = useHome();

  if (isLoading || isError) {
    return <MapLoading />;
  }

  return <Map id="map" />;
}

const Map = styled.div`
  height: calc(100vh - ${layouts.gnb});
`;
