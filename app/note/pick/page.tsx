import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import EmotionIcon from '@/components/common/EmotionIcon';
import BottomLayout from '@/components/layouts/BottomLayout';
import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';
import { emotionColors } from '@/styles/colors';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

import useNotePickPage from './logics';

export default function NotePickPage() {
  const { note, goHomePage, goNoteDetailPage } = useNotePickPage();

  const emotion = note?.content.emotion;

  return (
    <PageContainer>
      <Navigation>
        <Navigation.Back />
      </Navigation>
      <NotePickMessage>
        <p>쪽지를 발견했어요!</p>
        <p>쪽지를 함께 열어볼까요?</p>
      </NotePickMessage>
      {emotion && (
        <SelectedEmotion onClick={goNoteDetailPage}>
          <EmotionIcon
            name={emotion}
            width={'35vh'}
            height={'35vh'}
            fill={emotionColors[emotion]}
          />
        </SelectedEmotion>
      )}
      <BottomLayout>
        <NoteStay>
          <NoteStayMessage onClick={goHomePage}>
            다시 내려둘래요.
          </NoteStayMessage>
        </NoteStay>
        <ButtonWrapper>
          <Button variant="primary" onClick={goNoteDetailPage}>
            쪽지 열어보기
          </Button>
        </ButtonWrapper>
      </BottomLayout>
    </PageContainer>
  );
}

const NotePickMessage = styled.div`
  margin-top: 36px;
  margin-left: 20px;

  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
  }
`;

const SelectedEmotion = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.navigation} - 234px);

  & > svg {
    ${positionAbsoluteXYCenter};
  }
`;

const NoteStay = styled.div`
  padding: 12px 0;
  text-align: center;
`;

const NoteStayMessage = styled.p`
  display: inline-block;
  color: #777;
  text-decoration: underline;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  padding: 20px;
`;
