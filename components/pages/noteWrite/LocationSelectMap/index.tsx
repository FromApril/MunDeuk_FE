import { css } from '@emotion/react';
import styled from '@emotion/styled';

import MapLoading from '@/components/common/MapLoading';
import { layouts } from '@/styles/layouts';

import useLocationSelectMap from './logics';

export default function LocationSelectMap() {
  const { isLoading, isError } = useLocationSelectMap();

  if (isLoading || isError) {
    return <MapLoading css={loadingCss} />;
  }

  return <Map id="map" />;
}

const loadingCss = css`
  height: calc(100vh - ${layouts.button} * 2);
`;

const Map = styled.div`
  height: calc(100vh - ${layouts.button} * 2);
`;
