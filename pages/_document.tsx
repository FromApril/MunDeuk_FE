import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <div id="portal" />
        <Script
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCLOUD_CLIENT_ID}`}
          strategy="beforeInteractive"
        />
        <NextScript />
      </body>
    </Html>
  );
}
