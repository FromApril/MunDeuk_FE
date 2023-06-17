import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import EmotionIcon from '@/components/common/EmotionIcon';
import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';
import EmotionSelectModal from '@/components/pages/noteWrite/EmotionSelectModal';
import { emotionAtom } from '@/recoil/noteWrite/atoms';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

export default function EmotionSelect() {
  return (
    <PageContainer css={containerCss}>
      <Navigation isBack title="오늘의 감정" />
      <Emotion />
    </PageContainer>
  );
}

function Emotion() {
  const router = useRouter();
  const [emotion, setEmotion] = useRecoilState(emotionAtom);

  const handleComplete = () => {
    router.push('/noteWrite?page=3');
  };

  return (
    <EmotionContainer>
      <SelectedEmotion>
        <EmotionIcon name={emotion} width={200} height={200} fill="#ddd" />
      </SelectedEmotion>
      <EmotionSelectModal
        emotion={emotion}
        onClick={setEmotion}
        onComplete={handleComplete}
      />
    </EmotionContainer>
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

const EmotionContainer = styled.div``;

const SelectedEmotion = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.navigation} - 196px);

  & > svg {
    ${positionAbsoluteXYCenter};
  }
`;
