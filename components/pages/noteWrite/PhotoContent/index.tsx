import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import { flexXYCenter } from '@/styles/common';

import usePhotoContent from './logics';

export default function PhotoContent() {
  const { photos, handleChange, handleDelete, handleLoadImg } =
    usePhotoContent();

  if (!photos.length) {
    return (
      <PhotoUpload>
        <label htmlFor="fileUpload">
          <Button variant="dashed">
            <ButtonContents>
              <Icon name="Camera" width={24} height={24} />
              <div>사진 추가하기</div>
            </ButtonContents>
          </Button>
        </label>
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          multiple
          max={3}
          onChange={handleChange}
          onClick={(e: any) => (e.target.value = null)}
        />
      </PhotoUpload>
    );
  }

  return (
    <PhotoContentContainer>
      {photos.map((photo, idx) => {
        const url = URL.createObjectURL(photo);

        return (
          <PhotoImage key={'photo-' + idx}>
            <img src={url} alt="img" onLoad={() => handleLoadImg(url)} />
            <Icon
              name="Close"
              width={18}
              height={18}
              onClick={() => handleDelete(idx)}
            />
          </PhotoImage>
        );
      })}
    </PhotoContentContainer>
  );
}

const ButtonContents = styled.div`
  ${flexXYCenter};

  & > svg {
    margin-top: -4px;
    margin-right: 6px;
  }
`;

const PhotoUpload = styled.div`
  label {
    display: inline-block;
    width: 100%;
    height: 50px;
    cursor: pointer;

    & > button {
      pointer-events: none;
    }
  }

  input {
    width: 0;
    height: 0;
  }
`;

const PhotoContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 9px;
  background-color: #fafafa;
  padding: 16px;
  border-radius: 4px;
`;

const PhotoImage = styled.div`
  display: inline-block;
  position: relative;

  & > img {
    width: 95px;
    height: 95px;
  }

  & > svg {
    position: absolute;
    top: 4px;
    right: 4px;
  }
`;
