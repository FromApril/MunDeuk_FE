import styled from '@emotion/styled';

import PageContainer from '@/components/layouts/PageContainer';

type NoNoteProps = {
  onClick: () => void;
};

export default function NoNote({ onClick }: NoNoteProps) {
  return (
    <PageContainer>
      <NoNoteMessage>쪽지 정보가 없습니다.</NoNoteMessage>
      <ContentBottomSection>
        <NoteStay>
          <NoteStayMessage onClick={onClick}>홈으로 이동하기</NoteStayMessage>
        </NoteStay>
      </ContentBottomSection>
    </PageContainer>
  );
}

const ContentBottomSection = styled.section`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: calc(100% - 20px);
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

const NoNoteMessage = styled.div`
  padding-top: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
