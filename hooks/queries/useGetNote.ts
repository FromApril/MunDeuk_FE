import { useQuery } from '@tanstack/react-query';

import { getNotes } from '@/apis/note';
import { QUERIES } from '@/constants/queries';
import { Location } from '@/interfaces/common';

export default function useGetNote(location: Location) {
  return useQuery([QUERIES.GET_NOTES], () =>
    getNotes(location).then((res) => res.data),
  );
}
