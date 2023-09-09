'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          useErrorBoundary: true,
        },
      },
    }),
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} position="top-right" /> */}
    </>
  );
}
