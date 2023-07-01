import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import { layouts } from '@/styles/layouts';

type UserContentBottomProps = {
  onMessage: () => void;
  onSave: () => void;
};

export default function UserContentBottom({
  onMessage,
  onSave,
}: UserContentBottomProps) {
  return (
    <ContentBottom>
      <NoteStay>
        <NoteStayMessage onClick={onMessage}>다시 내려둘래요.</NoteStayMessage>
      </NoteStay>
      <Button variant="primary" onClick={onSave}>
        쪽지 저장하기
      </Button>
    </ContentBottom>
  );
}

const ContentBottom = styled.section`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: calc(100% - 20px);
  max-width: calc(${layouts.deviceWidth} - 20px);
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
