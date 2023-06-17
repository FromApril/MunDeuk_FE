import 'react-loading-skeleton/dist/skeleton.css';

import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import Skeleton from 'react-loading-skeleton';

import { layouts } from '@/styles/layouts';

export default function MapLoading(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <MainMapLoading {...props}>
      <Skeleton width="100%" height="100%" />
    </MainMapLoading>
  );
}

const MainMapLoading = styled.div`
  height: calc(100vh - ${layouts.gnb});
`;
