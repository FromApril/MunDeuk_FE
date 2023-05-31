import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';

import client from '@/apis/client';
import ApiErrorBoundary from '@/components/layouts/ApiErrorBoundary';

export default function KakaoMapPage() {
  return (
    <main>
      <ApiErrorBoundary>
        <Suspense fallback={<div>loading...</div>}>
          <Map />
        </Suspense>
      </ApiErrorBoundary>
    </main>
  );
}

function Map() {
  const { data } = useQuery(['/kakaoMap'], () => client.get('/hi'), {
    suspense: true,
    useErrorBoundary: true,
  });

  return <section>asdf</section>;
}
