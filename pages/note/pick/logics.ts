import { useRouter } from 'next/router';

import useNotes from '@/queries/useNotes';

export default function useNotePickPage() {
  const router = useRouter();
  const { data: notes } = useNotes();
  const noteId = Number(router.query.id);
  const note = notes?.find((note) => note.id == noteId);

  const goHomePage = () => router.push('/home');

  const goNoteDetailPage = () => router.push(`/note/${noteId}`);

  return {
    note,
    goHomePage,
    goNoteDetailPage,
  };
}
