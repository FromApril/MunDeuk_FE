import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';
import BottomButton from '@/components/pages/noteWrite/BottomButton';
// import MusicContent from '@/components/pages/noteWrite/MusicContent';
import PhotoContent from '@/components/pages/noteWrite/PhotoContent';
import TextContent from '@/components/pages/noteWrite/TextContent';
import useNoteWriteContents from '@/hooks/useNoteWriteContents';
import { layouts } from '@/styles/layouts';

export default function ContentsWrite() {
  const { text } = useNoteWriteContents();

  return (
    <PageContainer css={containerCss}>
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
        {/* <MusicSection>
          <Description>오늘의 노래</Description>
          <MusicContent />
        </MusicSection> */}
      </ContentBody>
      <BottomButton
        variant="primary"
        nextUrl="/noteWrite?page=4"
        disabled={text === ''}
      >
        다음
      </BottomButton>
    </PageContainer>
  );
}

const containerCss = css`
  padding-bottom: calc(${layouts.button} * 2);
`;

const Description = styled.div`
  margin-bottom: 8px;
  font-size: 13px;
  color: #777;
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

// const MusicSection = styled.section`
//   margin-top: 20px;
// `;
