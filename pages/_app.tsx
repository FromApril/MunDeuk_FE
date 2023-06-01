import '@/styles/global.css';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import PageLayout from '@/components/layouts/PageLayout';
import RootErrorBoundary from '@/components/layouts/RootErrorBoundary';

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
    <RootErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <PageLayout>
              <Component {...pageProps} />
              <Script
                src="https://kit.fontawesome.com/32d07c7523.js"
                crossOrigin="anonymous"
              />
            </PageLayout>
          </RecoilRoot>
        </Hydrate>
        {/* <ReactQueryDevtools initialIsOpen={false} position="top-right" /> */}
      </QueryClientProvider>
    </RootErrorBoundary>
  );
}
