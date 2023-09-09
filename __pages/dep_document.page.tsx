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
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=clusterer`}
          strategy="beforeInteractive"
        />
        <NextScript />
      </body>
    </Html>
  );
}
