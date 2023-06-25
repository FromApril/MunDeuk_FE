import { useQuery } from '@tanstack/react-query';

import { getNotes } from '@/apis/note';
import { QUERIES } from '@/constants/queries';

import useLocation from '../useLocation';

export default function useNotes() {
  const { isLoading, isError, location } = useLocation();

  const fetcher = () => getNotes(location).then((res) => res.data);

  return useQuery([QUERIES.NOTES], fetcher, {
    enabled: isLoading || isError ? false : true,
    // suspense: true,
  });
}
