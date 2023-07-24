import { useQuery } from '@tanstack/react-query';

import { getNote } from '@/apis/note';
import { QUERIES } from '@/constants/queries';

export default function useNote(noteId: number, memberId: number) {
  const fetcher = () => getNote(noteId, memberId).then((res) => res.data);

  return useQuery([QUERIES.NOTE, noteId], fetcher, {
    // suspense: true,
  });
}
