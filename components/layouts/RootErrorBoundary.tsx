import { PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

type RootErrorBoundaryProps = PropsWithChildren;

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col justify-center w-full h-[100px] border border-black m-3 p-1 text-center">
      <h1 className="">일시적인 오류가 발생했습니다</h1>
      <div className="my-2">
        <button
          className="bg-emerald-100 h100 px-2 rounded"
          type="button"
          onClick={resetErrorBoundary}
        >
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
