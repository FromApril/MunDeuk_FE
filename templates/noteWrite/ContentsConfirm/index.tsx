import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { postNote } from '@/apis/note';
import EmotionIcon from '@/components/common/EmotionIcon';
import Icon from '@/components/common/Icon';
import ApiErrorBoundary from '@/components/layouts/ApiErrorBoundary';
import Navigation from '@/components/layouts/Navigation';
import PageContainer from '@/components/layouts/PageContainer';
import EmotionSelectModal from '@/components/pages/noteWrite/EmotionSelectModal';
import {
  emotionAtom,
  locationAtom,
  musicAtom,
  photosAtom,
  textAtom,
} from '@/recoil/noteWrite/atoms';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

export default function ContentsConfirm() {
  const router = useRouter();
  const { mutate, error, isSuccess } = useMutation(postNote);

  const text = useRecoilValue(textAtom);
  const location = useRecoilValue(locationAtom);
  const photos = useRecoilValue(photosAtom);
  const music = useRecoilValue(musicAtom);
  const emotion = useRecoilValue(emotionAtom);
  const resetLocation = useResetRecoilState(locationAtom);
  const resetText = useResetRecoilState(textAtom);
  const resetPhotos = useResetRecoilState(photosAtom);
  const resetMusic = useResetRecoilState(musicAtom);
  const resetEmotion = useResetRecoilState(emotionAtom);

  console.log(location, photos, emotion, music);

  const resetStates = () => {
    resetLocation();
    resetText();
    resetPhotos();
    resetMusic();
    resetEmotion();
  };

  const getFormData = () => {
    const form = new FormData();

    form.append(
      'content',
      JSON.stringify({
        text,
      }),
    );
    form.append('latitude', String(location.latitude));
    form.append('longitude', String(location.longitude));
    form.append('writerId', String(3));

    for (const photo of photos) {
      form.append('newImages', photo, photo.name);
    }

    return form;
  };

  const submitForm = async () => {
    const form = getFormData();

    await mutate(form);

    if (isSuccess) {
      console.log('data');
    }

    console.log(error);
  };

  const handleComplete = () => {
    resetStates();

    router.push('/noteWrite?page=5');
  };

  const today = `${dayjs().get('M') + 1}월 ${dayjs().get('D')}일`;

  return (
    <ApiErrorBoundary>
      <PageContainer css={containerCss}>
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
        <EmotionSelectModal
          emotion={emotion}
          onClick={() => null}
          onComplete={submitForm}
        />
      </PageContainer>
    </ApiErrorBoundary>
  );
}

const containerCss = css`
  background-color: #000;
  height: 100vh;

  & > div:nth-of-type(3) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100%;
    max-width: ${layouts.deviceWidth};
  }
`;

const SelectedEmotion = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.navigation} - 196px);

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
