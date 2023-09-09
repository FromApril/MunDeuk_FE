'use client';

import '@/styles/normalize.css';

import Head from 'next/head';
import Script from 'next/script';

import PageLayout from '@/components/layouts/PageLayout';
import ReactQueryProvider from '@/components/layouts/ReactQueryProvider';
import RecoilProvider from '@/components/layouts/RecoilProvider';
import RootErrorBoundary from '@/components/layouts/RootErrorBoundary';
import GlobalStyle from '@/styles/Global';

import packageJson from '../package.json';

// export const metadata = {
//   title: `Mundeuk v${packageJson.version}`,
//   description:
//     '문득은 장소에 쪽지를 남길 수 있는 플랫폼 서비스입니다. "문득" 생각나는 내용을 적어보세요.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui, viewport-fit=cover"
        />
        <title>{`Mundeuk v${packageJson.version}`}</title>
      </Head>
      <body>
        <RootErrorBoundary>
          <ReactQueryProvider>
            <RecoilProvider>
              <PageLayout>
                {children}
                <GlobalStyle />
              </PageLayout>
            </RecoilProvider>
          </ReactQueryProvider>
        </RootErrorBoundary>
      </body>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=clusterer`}
      />
      <Script
        src="https://kit.fontawesome.com/32d07c7523.js"
        crossOrigin="anonymous"
      />
    </html>
  );
}
