import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { subscribeNote } from '@/apis/note';
import useLoading from '@/hooks/useLoading';
import useUser from '@/hooks/useUser';
import useNote from '@/queries/useNote';

export default function useNoteDetailPage() {
  const router = useRouter();
  const { mutate } = useMutation(
    (payload: Parameters<typeof subscribeNote>[0]) => subscribeNote(payload),
  );
  const { showLoading, hideLoading } = useLoading();
  const { user } = useUser();

  const noteId = Number(router.query.id);
  const { data: note } = useNote(noteId, user.id);

  const goHomePage = () => router.push('/home');

  const saveNote = () => {
    showLoading();

    mutate(
      {
        viewerId: user.id,
        noteId,
      },
      {
        onSuccess: () => {
          alert('쪽지 저장하기를 성공적으로 저장했습니다.');
          goHomePage();
        },
        onError: () => {
          alert('쪽지 저장하기를 실패했습니다.');
        },
        onSettled: hideLoading,
      },
    );
  };

  return {
    note,
    goHomePage,
    saveNote,
  };
}
