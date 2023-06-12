import { css } from '@emotion/react';

export const positionAbsoluteXYCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const positionFixedBottom = css`
  position: fixed;
  left: 0;
  bottom: 0;
`;

export const flexXYCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
