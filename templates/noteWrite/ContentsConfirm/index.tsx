import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import EmotionIcon from '@/components/common/EmotionIcon';
import Icon from '@/components/common/Icon';
import Navigation from '@/components/layouts/Navigation';
import SelectEmotionModal from '@/components/pages/noteWrite/SelectEmotionModal';
import {
  emotionAtom,
  musicAtom,
  photosAtom,
  textAtom,
} from '@/recoil/noteWrite/atoms';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

export default function ContentsConfirm() {
  const router = useRouter();
  const photos = useRecoilValue(photosAtom);
  const music = useRecoilValue(musicAtom);
  const emotion = useRecoilValue(emotionAtom);
  const resetText = useResetRecoilState(textAtom);
  const resetPhotos = useResetRecoilState(photosAtom);
  const resetMusic = useResetRecoilState(musicAtom);
  const resetEmotion = useResetRecoilState(emotionAtom);

  const handleComplete = () => {
    resetText();
    resetPhotos();
    resetMusic();
    resetEmotion();

    router.push('/noteWrite?page=5');
  };

  const today = `${dayjs().get('M') + 1}월 ${dayjs().get('D')}일`;

  return (
    <Container>
      <Navigation isBack title="쪽지 작성" />
      <SelectedEmotion>
        <EmotionIcon name={emotion} width={300} height={300} fill="#FF7AC5" />
        <SavedContents>
          <div>{today}</div>
          <div>
            <ContentIcon>
              <Icon name="Text" width={24} height={24} />
            </ContentIcon>
            {photos.length > 0 && (
              <ContentIcon>
                <Icon name="Camera" width={24} height={24} />
              </ContentIcon>
            )}
            {music.title && (
              <ContentIcon>
                <Icon name="Music" width={24} height={24} />
              </ContentIcon>
            )}
          </div>
        </SavedContents>
      </SelectedEmotion>
      <SelectEmotionModal
        emotion={emotion}
        onClick={() => null}
        onComplete={handleComplete}
      />
    </Container>
  );
}

const Container = styled.div`
  background-color: #000;
  height: 100vh;

  & > div:nth-of-type(3) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${layouts.gnb};
    width: ${layouts.deviceWidth};
  }
`;

const SelectedEmotion = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.navigation} - ${layouts.gnb} - 196px);

  & > svg {
    ${positionAbsoluteXYCenter};
  }
`;

const SavedContents = styled.div`
  ${positionAbsoluteXYCenter};
  text-align: center;

  & > div:nth-of-type(1) {
    font-size: 20px;
    font-weight: 600;
  }

  & > div:nth-of-type(2) {
    margin-top: 10px;
    display: inline-flex;
    gap: 0 12px;
  }
`;

const ContentIcon = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 50%;
  width: 52px;
  height: 52px;

  & > svg {
    ${positionAbsoluteXYCenter};
  }
`;
