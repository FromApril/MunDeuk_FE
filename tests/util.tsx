import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MutableSnapshot, RecoilRoot, RecoilState } from 'recoil';

export function withRecoilRoot(
  children: React.ReactNode,
  initializeState: (mutableSnapshot: MutableSnapshot) => void,
) {
  return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
}

export function withQueryClient(children: React.ReactNode) {
  const testClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
  );
}

export function getInitializeState<T>(atom: RecoilState<T>, value: T) {
  return function ({ set }: MutableSnapshot) {
    set(atom, value);
  };
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        useErrorBoundary: true,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });
}
