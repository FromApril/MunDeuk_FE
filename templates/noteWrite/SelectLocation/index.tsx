import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/common/Button';
import Navigation from '@/components/layouts/Navigation';
import { layouts } from '@/styles/layouts';

export default function SelectLocation() {
  const router = useRouter();

  const goNextPage = () => router.push('/noteWrite?page=2');

  return (
    <Container>
      <Navigation isBack title="위치 설정" />
      <BottomButton>
        <Button variant="primary" onClick={goNextPage}>
          다음
        </Button>
      </BottomButton>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const BottomButton = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: ${layouts.deviceWidth};
  bottom: ${layouts.gnb};
`;
