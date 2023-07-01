import styled from '@emotion/styled';

import { Note } from '@/interfaces/note';

type UserContentProps = {
  note: Note;
};

export default function UserContent({ note }: UserContentProps) {
  const { content, imageUrls } = note;
  const text = content.text || '없음';

  return (
    <UserContentSection>
      <TextSection>
        <ContentDescription>오늘의 글</ContentDescription>
        <Text>{text}</Text>
      </TextSection>
      {imageUrls.length > 0 && (
        <ImagesSection>
          <ContentDescription>오늘의 사진</ContentDescription>
          <Images>
            {imageUrls.map((url) => (
              <Image key={url}>
                <img src={url} alt="img" />
              </Image>
            ))}
          </Images>
        </ImagesSection>
      )}
      {/* <MusicSection>
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
    </MusicSection> */}
    </UserContentSection>
  );
}

const UserContentSection = styled.section`
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

const TextSection = styled.section``;

const Text = styled.div``;

const ImagesSection = styled.section`
  margin-top: 40px;
`;

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
