import { useRouter } from 'next/router';

import useUser from '@/hooks/useUser';
import useNote from '@/queries/useNote';

export default function useNotePickPage() {
  const router = useRouter();
  const noteId = Number(router.query.id);
  const { user } = useUser();
  const { data: note } = useNote(noteId, user.id);

  const goHomePage = () => router.push('/home');

  const goNoteDetailPage = () => router.push(`/note/${noteId}`);

  return {
    note,
    goHomePage,
    goNoteDetailPage,
  };
}
