import { useRouter } from 'next/router';
import React from 'react';

// TODOS
// 1. 라우팅 페이지는 임의로 지정
// 2. 아이콘은 커스텀하게 바뀌어야 할듯
// 3. 전반적인 스타일 조정될 수 있음
// 4. GNB SHOW/HIDE 처리가 상위 컴포넌트에서 이뤄져야함 (메인페이지에서만 GNB SHOW, 나머지 HIDE) 상태체크필요

export default function Gnb() {
  const router = useRouter();

  const goPage = (pathname: '/home' | '/addPost' | '/myPage') => {
    router.push(pathname);
  };

  return (
    <nav className="bg-slate-300 fixed left-50 bottom-0 translate-x-[-1px] w-[375px] h-[50px] grid grid-cols-3 items-center text-center">
      <div>
        <i
          className="fa-solid fa-house"
          aria-label="홈"
          onClick={() => goPage('/home')}
        />
      </div>
      <div>
        <i
          className="fa-solid fa-plus"
          aria-label="쪽지작성"
          onClick={() => goPage('/addPost')}
        />
      </div>
      <div>
        <i
          className="fa-solid fa-user"
          aria-label="마이페이지"
          onClick={() => goPage('/myPage')}
        />
      </div>
    </nav>
  );
}
