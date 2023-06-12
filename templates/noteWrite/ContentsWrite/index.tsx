import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';

import Button from '@/components/common/Button';
import Navigation from '@/components/layouts/Navigation';
import MusicContent from '@/components/pages/noteWrite/MusicContent';
import PhotoContent from '@/components/pages/noteWrite/PhotoContent';
import TextContent from '@/components/pages/noteWrite/TextContent';
import { textAtom } from '@/recoil/noteWrite/atoms';
import { positionFixedBottom } from '@/styles/common';
import { layouts } from '@/styles/layouts';

export default function ContentsWrite() {
  const router = useRouter();
  const text = useRecoilValue(textAtom);

  const goNextPage = () => router.push('/noteWrite?page=4');

  return (
    <Container>
      <Navigation isBack title="쪽지 작성" />
      <ContentBody>
        <TextSection>
          <Description>글 작성하기</Description>
          <TextContent />
        </TextSection>
        <PhotoSection>
          <Description>오늘의 사진</Description>
          <PhotoContent />
        </PhotoSection>
        <MusicSection>
          <Description>오늘의 노래</Description>
          <MusicContent />
        </MusicSection>
        <BottomButton>
          <Button variant="primary" disabled={text === ''} onClick={goNextPage}>
            완료
          </Button>
        </BottomButton>
      </ContentBody>
    </Container>
  );
}

const Description = styled.div`
  margin-bottom: 8px;
  font-size: 13px;
  color: #777;
`;

const Container = styled.div`
  height: 100vh;
`;

const ContentBody = styled.div`
  padding: 0 20px;
`;

const TextSection = styled.section`
  margin-top: 20px;
`;

const PhotoSection = styled.section`
  margin-top: 20px;
`;

const MusicSection = styled.section`
  margin-top: 20px;
`;

const BottomButton = styled.div`
  ${positionFixedBottom};
  left: 50%;
  bottom: ${layouts.gnb};
  transform: translateX(-50%);
  width: calc(${layouts.deviceWidth} - 20px);
`;
