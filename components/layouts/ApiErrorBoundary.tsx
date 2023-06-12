import { isAxiosError } from 'axios';
import { PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

type ApiErrorBoundaryProps = PropsWithChildren;

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  if (!isAxiosError(error)) {
    throw error;
  }

  return (
    <div className="inline-flex items-center h-[20px] border border-black my-2 p-5">
      <h1 className="">일시적인 오류가 발생했습니다</h1>
      <button
        className="bg-emerald-100 h100 mx-2 px-2 rounded"
        type="button"
        onClick={resetErrorBoundary}
      >
        다시 시도하기
      </button>
    </div>
  );
}

export default function ApiErrorBoundary({ children }: ApiErrorBoundaryProps) {
  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}
