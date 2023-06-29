import { useRouter } from 'next/router';

import useNotes from '@/hooks/queries/useNotes';

export default function useNoteDetailPage() {
  const router = useRouter();
  const { data: notes } = useNotes();

  const noteId = Number(router.query.id);
  const note = notes?.find((note) => note.id == noteId);

  console.log(router.query, noteId, note);

  const goHomePage = () => router.push('/home');

  // TODO: 쪽지 저장하기 함수
  const subscribeNote = () => {
    // logics
  };

  return {
    note,
    goHomePage,
    subscribeNote,
  };
}
