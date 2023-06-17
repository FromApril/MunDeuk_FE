import styled from '@emotion/styled';
import { HTMLAttributes, PropsWithChildren } from 'react';

type PageContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function PageContainer({
  children,
  ...restProps
}: PageContainerProps) {
  return <Container {...restProps}>{children}</Container>;
}

// styled
const Container = styled.div`
  min-height: 100vh;
`;
