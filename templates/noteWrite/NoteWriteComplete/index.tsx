import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import { positionFixedBottom } from '@/styles/common';
import { layouts } from '@/styles/layouts';

export default function NoteWriteComplete() {
  const router = useRouter();

  const goHomePage = () => router.push('/home');

  return (
    <Container>
      <Description>성공적으로 쪽지를 작성했습니다.</Description>
      <CompleteImage>
        <Image
          src="/images/note_write_complete.png"
          alt="complete"
          width={375}
          height={400}
        />
      </CompleteImage>
      <BottomButton>
        <Button variant="primary" onClick={goHomePage}>
          다른 쪽지 구경하기
        </Button>
      </BottomButton>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Description = styled.div`
  padding-top: 70px;
  padding-left: 20px;
  font-weight: 700;
  font-size: 24px;
`;

const CompleteImage = styled.div`
  margin-top: 40px;
`;

const BottomButton = styled.div`
  ${positionFixedBottom};
  left: 50%;
  bottom: ${layouts.gnb};
  transform: translateX(-50%);
  width: calc(${layouts.deviceWidth} - 20px);
`;
