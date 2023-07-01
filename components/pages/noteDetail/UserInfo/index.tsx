import styled from '@emotion/styled';

import EmotionIcon from '@/components/common/EmotionIcon';
import { Note } from '@/interfaces/note';

type UserInfoProps = {
  note: Note;
};

export default function UserInfo({ note }: UserInfoProps) {
  const { content, imageUrls, id } = note;

  const emotion = content.emotion || 'Default';
  const count = [content.text, imageUrls.length];

  return (
    <UserInfoSection>
      <div>
        <EmotionIcon name={emotion} width={55} height={55} fill="#6bafff" />
      </div>
      <div>
        <p>{id}님의 쪽지</p>
        <p>콘텐츠 {count}개</p>
      </div>
    </UserInfoSection>
  );
}

const UserInfoSection = styled.section`
  padding: 30px 20px;
  color: #fff;

  div:nth-of-type(2) {
    p:nth-of-type(1) {
      font-size: 14px;
      font-weight: 700;
    }

    p:nth-of-type(2) {
      font-size: 14px;
    }
  }
`;
