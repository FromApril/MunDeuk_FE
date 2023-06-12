import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import { photosAtom } from '@/recoil/noteWrite/atoms';
import { flexXYCenter } from '@/styles/common';

export default function PhotoContent() {
  const [photos, setPhotos] = useRecoilState(photosAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      if (files.length > 3) {
        alert('3개 이미지까지 업로드 가능합니다.');
        return;
      }

      const imgFiles = Array.from(files);
      imgFiles.map((file) => encodeFileToBase64(file));
    }
  };

  const handleDelete = (idx: number) => {
    const newPhotos = [...photos.slice(0, idx), ...photos.slice(idx + 1)];
    setPhotos(newPhotos);
  };

  const encodeFileToBase64 = (blob: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    return new Promise((resolve) => {
      reader.onload = () => {
        const result = reader.result as string;

        setPhotos((prev) => [...prev, result]);
        resolve(true);
      };
    });
  };

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
      {photos.map((photo, idx) => (
        <PhotoImage key={'photo-' + idx}>
          <img src={photo} alt="img" />
          <Icon
            name="Close"
            width={18}
            height={18}
            onClick={() => handleDelete(idx)}
          />
        </PhotoImage>
      ))}
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
