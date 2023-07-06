import { css } from '@emotion/react';
import styled from '@emotion/styled';

import EmotionIcon from '@/components/common/EmotionIcon';
import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';
import EmotionSelectModal from '@/components/pages/noteWrite/EmotionSelectModal';
import { emotionColors } from '@/styles/colors';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

import useContentsConfirm from './logics';
import SavedContents from './SavedContents';

export default function ContentsConfirm() {
  const { emotion, today, photos, music, submitForm } = useContentsConfirm();

  return (
    <PageContainer css={containerCss}>
      <Navigation isBack title="쪽지 작성" />
      <SelectedEmotion>
        <EmotionIcon
          name={emotion}
          width={300}
          height={300}
          fill={emotionColors[emotion]}
        />
        <SavedContents
          today={today}
          isHavePhotos={photos.length > 0}
          isHaveMusic={music.title.length > 0}
        />
      </SelectedEmotion>
      <EmotionSelectModal
        emotion={emotion}
        onClick={() => null}
        onComplete={submitForm}
      />
    </PageContainer>
  );
}

const containerCss = css`
  background-color: #000;
  height: 100vh;

  & > div:nth-of-type(3) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100%;
    max-width: ${layouts.deviceWidth};
  }
`;

const SelectedEmotion = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.navigation} - 196px);

  & > svg {
    ${positionAbsoluteXYCenter};
  }
`;
