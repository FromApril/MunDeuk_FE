import styled from '@emotion/styled';

import EmotionIcon from '@/components/common/EmotionIcon';
import EmotionSelectModal from '@/components/pages/noteWrite/EmotionSelectModal';
import { emotionColors } from '@/styles/colors';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

import useEmotion from './logics';

export default function Emotion() {
  const { emotion, setEmotion, handleComplete } = useEmotion();

  return (
    <EmotionContainer>
      <SelectedEmotion>
        <EmotionIcon
          name={emotion}
          width={200}
          height={200}
          fill={emotionColors[emotion]}
        />
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
