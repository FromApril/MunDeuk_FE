import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { memo } from 'react';

import { layouts } from '@/styles/layouts';

function Gnb() {
  const router = useRouter();

  const goPage = (pathname: '/home' | '/noteWrite?page=1' | '/myPage') => {
    router.push(pathname);
  };

  return (
    <StyledGnb>
      <div>
        <i
          className="fa-solid fa-house fa-lg"
          aria-label="홈"
          onClick={() => goPage('/home')}
        />
      </div>
      <div>
        <i
          className="fa-solid fa-plus fa-lg"
          aria-label="쪽지작성"
          onClick={() => goPage('/noteWrite?page=1')}
        />
      </div>
      <div>
        <i
          className="fa-solid fa-user fa-lg"
          aria-label="마이페이지"
          onClick={() => goPage('/myPage')}
        />
      </div>
    </StyledGnb>
  );
}

export default memo(Gnb);

const StyledGnb = styled.nav`
  background-color: #ddd;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  max-width: ${layouts.deviceWidth};
  height: ${layouts.gnb};
`;
