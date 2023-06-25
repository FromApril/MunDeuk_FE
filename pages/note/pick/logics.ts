import { useRouter } from 'next/router';

export default function useNotePickPage() {
  const router = useRouter();
  const noteId = router.query.id;

  const goHomePage = () => router.push('/home');

  const goNoteDetailPage = () => router.push(`/note/${noteId}`);

  return {
    goHomePage,
    goNoteDetailPage,
  };
}
