import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import EmotionIcon from '@/components/common/EmotionIcon';
import EmotionSelectModal from '@/components/pages/noteWrite/EmotionSelectModal';
import { emotionAtom } from '@/recoil/noteWrite/atoms';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

export default function Emotion() {
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

const EmotionContainer = styled.div``;

const SelectedEmotion = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.navigation} - 196px);

  & > svg {
    ${positionAbsoluteXYCenter};
  }
`;
