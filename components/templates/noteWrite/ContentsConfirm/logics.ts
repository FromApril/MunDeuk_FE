import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

import { postNoteWithImage } from '@/apis/note';
import useLoading from '@/hooks/useLoading';
import useNoteWriteContents from '@/hooks/useNoteWriteContents';

export default function useContentsConfirm() {
  const router = useRouter();
  const { mutate } = useMutation(postNoteWithImage);
  const { location, text, photos, music, emotion, resetAllContents } =
    useNoteWriteContents();
  const { showLoading, hideLoading } = useLoading();

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
    showLoading();

    const form = getFormData();

    mutate(form, {
      onSuccess: () => {
        handleComplete();
      },
      onError: (error) => {
        alert('쪽지 작성하기를 실패했습니다.');
        console.error(error);
      },
      onSettled: () => {
        hideLoading();
      },
    });
  };

  const handleComplete = () => {
    resetAllContents();

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
