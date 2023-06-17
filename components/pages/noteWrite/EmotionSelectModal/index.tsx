import styled from '@emotion/styled';
import React from 'react';

import EmotionIcon from '@/components/common/EmotionIcon';
import { EmotionType } from '@/interfaces/note';

const EMOTIONS = [
  {
    type: 'Glad',
    title: '즐거운',
  },
  {
    type: 'Flutter',
    title: '설레는',
  },
  {
    type: 'Depressed',
    title: '우울한',
  },
  {
    type: 'Touched',
    title: '감동적인',
  },
] as const;

type EmotionSelectModalProps = {
  emotion: EmotionType;
  onClick: (emotion: EmotionType) => void;
  onComplete: () => void;
};

function EmotionSelectModal({
  emotion,
  onClick,
  onComplete,
}: EmotionSelectModalProps) {
  return (
    <ModalContainer>
      <ModalHeader>
        <span>오늘의 감정 선택</span>
        <span onClick={onComplete}>완료</span>
      </ModalHeader>
      <ModalContents>
        {EMOTIONS.map(({ type, title }) => (
          <Emotion key={title} onClick={() => onClick(type)}>
            <div>
              <EmotionIcon
                name={type}
                width={74}
                height={74}
                fill={emotion === type ? '#000' : '#ddd'}
              />
            </div>
            <div>{title}</div>
          </Emotion>
        ))}
      </ModalContents>
    </ModalContainer>
  );
}

export default React.memo(EmotionSelectModal);

const ModalContainer = styled.div`
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 25px 20px 15px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & > span:nth-of-type(1) {
    font-weight: 500;
    font-size: 18px;
  }

  & > span:nth-of-type(2) {
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`;

const ModalContents = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Emotion = styled.div`
  text-align: center;
  cursor: pointer;

  div:nth-of-type(1) {
    img {
      margin: 0 auto;
    }
  }

  div:nth-of-type(2) {
    margin-top: 4px;
    font-weight: 700;
    font-size: 13px;
  }
`;
