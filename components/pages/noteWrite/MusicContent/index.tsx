import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import useNoteWriteContents from '@/hooks/useNoteWriteContents';
import { flexXYCenter } from '@/styles/common';

export default function MusicContent() {
  const { music, setMusic, resetMusic } = useNoteWriteContents();

  const setTmpMusic = () => {
    setMusic({
      imgUrl: '/sample/music_attention.png',
      title: 'Attention',
      artist: 'NewJeans',
    });
  };

  if (!music.title) {
    return (
      <Button variant="dashed" onClick={setTmpMusic}>
        <ButtonContents>
          <Icon name="Music" width={24} height={24} />
          <div>노래 추가하기</div>
        </ButtonContents>
      </Button>
    );
  }

  const { imgUrl, title, artist } = music;

  return (
    <SelectedMusic>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
      <div>
        <Icon name="Close" width={18} height={18} onClick={resetMusic} />
      </div>
    </SelectedMusic>
  );
}

const ButtonContents = styled.div`
  ${flexXYCenter};

  & > svg {
    margin-top: -4px;
    margin-right: 6px;
  }
`;

const SelectedMusic = styled.div`
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
