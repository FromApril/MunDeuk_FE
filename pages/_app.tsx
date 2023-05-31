import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            useErrorBoundary: true,
          },
        },
      }),
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Hydrate>
        {/* <ReactQueryDevtools initialIsOpen={false} position="top-right" /> */}
      </QueryClientProvider>
    </>
  );
}
