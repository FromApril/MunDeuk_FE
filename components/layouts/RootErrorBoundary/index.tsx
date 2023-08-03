import { PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

type RootErrorBoundaryProps = PropsWithChildren;

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <h1>일시적인 오류가 발생했습니다</h1>
      <div>
        <button type="button" onClick={resetErrorBoundary}>
          다시 시도하기
        </button>
      </div>
    </div>
  );
}

export default function RootErrorBoundary({
  children,
}: RootErrorBoundaryProps) {
  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}
