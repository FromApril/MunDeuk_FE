import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { postNoteWithImage } from '@/apis/note';
import {
  emotionAtom,
  locationAtom,
  musicAtom,
  photosAtom,
  textAtom,
} from '@/recoil/noteWrite/atoms';

export default function useContentsConfirm() {
  const router = useRouter();
  const { mutate } = useMutation(postNoteWithImage);

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
        emotion,
      }),
    );
    form.append('latitude', String(location.latitude));
    form.append('longitude', String(location.longitude));
    form.append('writerId', String(3));

    for (const photo of photos) {
      form.append('files', photo, photo.name);
    }

    return form;
  };

  const submitForm = () => {
    window.alert('로딩');

    const form = getFormData();

    mutate(form, {
      onSuccess: () => {
        handleComplete();
      },
      onError: (error) => {
        alert('쪽지 작성하기를 실패했습니다.');
        console.log(error);
      },
    });
  };

  const handleComplete = () => {
    resetStates();

    router.push('/noteWrite?page=5');
  };

  const today = `${dayjs().get('M') + 1}월 ${dayjs().get('D')}일`;

  return {
    emotion,
    today,
    photos,
    music,
    submitForm,
  };
}
