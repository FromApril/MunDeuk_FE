import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { subscribeNote } from '@/apis/note';
import useNotes from '@/hooks/queries/useNotes';
import useLoading from '@/hooks/useLoading';

export default function useNoteDetailPage() {
  const router = useRouter();
  const { data: notes } = useNotes();
  const { mutate } = useMutation(
    (payload: Parameters<typeof subscribeNote>[0]) => subscribeNote(payload),
  );
  const { showLoading, hideLoading } = useLoading();

  const noteId = Number(router.query.id);
  const note = notes?.find((note) => note.id == noteId);

  console.log(router.query, noteId, note);

  const goHomePage = () => router.push('/home');

  const saveNote = () => {
    showLoading();

    mutate(
      {
        viewerId: 3,
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
