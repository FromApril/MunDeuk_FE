import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// import { PagingResponse } from '@/interfaces/common';

// type UseInfiniteScrollParams<T> = UseInfiniteQueryOptions<PagingResponse<T>>;
type UseInfiniteScrollParams<T> = any; // 임시

export default function useInfiniteScroll<T>({
  queryKey,
  queryFn,
  ...restProps
}: UseInfiniteScrollParams<T>) {
  const { ref, inView } = useInView();

  const queryResult = useInfiniteQuery({
    queryKey,
    queryFn,
    getNextPageParam: (lastPage: any) => {
      const { last, pageable } = lastPage;

      return last ? false : pageable.pageNumber + 1;
    },
    ...restProps,
  });

  useEffect(() => {
    if (inView) {
      queryResult.fetchNextPage();
    }
  }, [inView]);

  return {
    ref,
    ...queryResult,
  };
}
