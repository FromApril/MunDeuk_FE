import { css } from '@emotion/react';

import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';
import { layouts } from '@/styles/layouts';

import Emotion from './Emotion';

export default function EmotionSelect() {
  return (
    <PageContainer css={containerCss}>
      <Navigation isBack title="오늘의 감정" />
      <Emotion />
    </PageContainer>
  );
}

const containerCss = css`
  background-color: #000;

  & > div:nth-of-type(3) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100%;
    max-width: ${layouts.deviceWidth};
  }
`;
