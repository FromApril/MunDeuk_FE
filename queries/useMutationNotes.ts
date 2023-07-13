import { useMutation } from '@tanstack/react-query';

import { getNotes } from '@/apis/note';
import { Location } from '@/interfaces/common';

export default function useMutationNotes() {
  return useMutation((location: Location) => getNotes(location));
}
