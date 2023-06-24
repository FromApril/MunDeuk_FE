import { useRouter } from 'next/router';

export default function useNotePick() {
  const router = useRouter();
  const noteId = router.query.id;

  const goHomePage = () => router.push('/home');

  const goNoteDetailPage = () => router.push(`/note/${noteId}`);

  return {
    goHomePage,
    goNoteDetailPage,
  };
}
