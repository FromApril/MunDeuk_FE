import styled from '@emotion/styled';

import { positionAbsoluteXYCenter } from '@/styles/common';
import { zIndexs } from '@/styles/zIndexs';

export default function Loading() {
  return (
    <LoadingOutside>
      <LoadingIcon>
        <i className="fa-solid fa-spinner fa-xl" style={{ color: '#fcfcfc' }} />
      </LoadingIcon>
    </LoadingOutside>
  );
}

export const LoadingOutside = styled.div`
  background: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: ${zIndexs.loadingOutSide};
`;

export const LoadingIcon = styled.div`
  ${positionAbsoluteXYCenter};
  z-index: ${zIndexs.loadingOutSide};
`;
