import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/naverMap">
          <h1>네이버맵으로 이동</h1>
        </Link>
        <Link href="/kakaoMap">
          <h1>카카오맵으로 이동</h1>
        </Link>
      </nav>
    </main>
  );
}
