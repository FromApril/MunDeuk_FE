import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

import EmotionIcon from '@/components/common/EmotionIcon';
import Navigation from '@/components/layouts/Navigation';
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
    <Container>
      <Navigation isBack title="쪽지 작성" />
      <SelectedEmotion>
        <EmotionIcon name={emotion} width={300} height={300} fill="#ddd" />
      </SelectedEmotion>
      <SelectEmotionModal
        emotion={emotion}
        onClick={setEmotion}
        onComplete={handleComplete}
      />
    </Container>
  );
}

const Container = styled.div`
  background-color: #000;
  height: 100vh;

  & > div:nth-of-type(3) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${layouts.gnb};
    width: ${layouts.deviceWidth};
  }
`;

const SelectedEmotion = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.navigation} - ${layouts.gnb} - 196px);

  & > svg {
    ${positionAbsoluteXYCenter};
  }
`;
