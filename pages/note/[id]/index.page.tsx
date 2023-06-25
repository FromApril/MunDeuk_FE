import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import EmotionIcon from '@/components/common/EmotionIcon';
import PageContainer from '@/components/layouts/PageContainer';
import { positionAbsoluteBottom } from '@/styles/common';

const IMG_URL = '/sample/hangang.webp';

export default function NoteDetailPage() {
  const router = useRouter();

  const goHomePage = () => router.push('/home');

  // TODO: 쪽지 저장하기 함수
  const subscribeNote = () => {
    // logics
  };

  return (
    <PageContainer css={containerCss}>
      <UserInfo>
        <div>
          <EmotionIcon name="Glad" width={55} height={55} fill="#6bafff" />
        </div>
        <div>
          <p>{'선우'}님의 쪽지</p>
          <p>콘텐츠 {4}개</p>
        </div>
      </UserInfo>
      <UserContent>
        <ImagesSection>
          <ContentDescription>오늘의 사진</ContentDescription>
          <Images>
            <Image>
              <img src={IMG_URL} alt="img" />
            </Image>
            <Image>
              <img src={IMG_URL} alt="img" />
            </Image>
          </Images>
        </ImagesSection>
        <MusicSection>
          <ContentDescription>오늘의 노래</ContentDescription>
          <Music>
            <div>
              <img src={IMG_URL} alt={'title'} />
            </div>
            <div>
              <h3>{'Attention'}</h3>
              <p>{'Newjeans'}</p>
            </div>
          </Music>
        </MusicSection>
        <ContentBottom>
          <NoteStay>
            <NoteStayMessage onClick={goHomePage}>
              다시 내려둘래요.
            </NoteStayMessage>
          </NoteStay>
          {/* <ButtonWrapper> */}
          <Button variant="primary" onClick={subscribeNote}>
            쪽지 저장하기
          </Button>
          {/* </ButtonWrapper> */}
        </ContentBottom>
      </UserContent>
    </PageContainer>
  );
}

const containerCss = css`
  background-color: #000;
`;

const UserInfo = styled.section`
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

const UserContent = styled.section`
  position: relative;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 25px 20px 10px;
  height: calc(100vh - 164px);
`;

const ContentDescription = styled.h3`
  color: #777;
  font-size: 13px;
`;

const ImagesSection = styled.section``;

const Images = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 12px;
`;

const Image = styled.div`
  & > img {
    border-radius: 4px;
    width: 95px;
    height: 95px;
  }
`;

const MusicSection = styled.section`
  margin-top: 40px;
`;

const Music = styled.div`
  margin-top: 8px;
  background-color: #fafafa;
  padding: 16px;
  border-radius: 4px;
  display: flex;

  & > div:nth-of-type(1) {
    flex: 0 0 51px;

    img {
      width: 51px;
      height: 51px;
    }
  }

  & > div:nth-of-type(2) {
    margin-left: 12px;
    flex: auto;

    h3 {
      font-weight: 600;
      font-size: 16px;
      color: #000;
    }

    p {
      font-weight: 600;
      font-size: 12px;
      color: #949494;
    }
  }

  & > div:nth-of-type(3) {
    flex: 0;
  }
`;

const ContentBottom = styled.section`
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
