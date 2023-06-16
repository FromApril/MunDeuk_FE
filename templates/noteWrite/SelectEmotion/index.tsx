import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import EmotionIcon from '@/components/common/EmotionIcon';
import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';
import SelectEmotionModal from '@/components/pages/noteWrite/SelectEmotionModal';
import { emotionAtom } from '@/recoil/noteWrite/atoms';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

export default function SelectEmotion() {
  const router = useRouter();
  const [emotion, setEmotion] = useRecoilState(emotionAtom);

  const handleComplete = () => {
    router.push('/noteWrite?page=3');
  };

  return (
    <PageContainer css={containerCss}>
      <Navigation isBack title="오늘의 감정" />
      <SelectedEmotion>
        <EmotionIcon name={emotion} width={200} height={200} fill="#ddd" />
      </SelectedEmotion>
      <SelectEmotionModal
        emotion={emotion}
        onClick={setEmotion}
        onComplete={handleComplete}
      />
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

const SelectedEmotion = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.navigation} - 196px);

  & > svg {
    ${positionAbsoluteXYCenter};
  }
`;
