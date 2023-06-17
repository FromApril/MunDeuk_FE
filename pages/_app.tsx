import '@/styles/normalize.css';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import PageLayout from '@/components/layouts/PageLayout';
import RootErrorBoundary from '@/components/layouts/RootErrorBoundary';
import GlobalStyle from '@/styles/Global';

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui, viewport-fit=cover"
        />
        <title>Mundeuk FE</title>
      </Head>
      <RootErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
              <PageLayout>
                <Component {...pageProps} />
                <GlobalStyle />
              </PageLayout>
            </RecoilRoot>
          </Hydrate>
          {/* <ReactQueryDevtools initialIsOpen={false} position="top-right" /> */}
        </QueryClientProvider>
      </RootErrorBoundary>
      <Script
        src="https://kit.fontawesome.com/32d07c7523.js"
        crossOrigin="anonymous"
      />
    </>
  );
}
