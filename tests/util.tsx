import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

export function withRecoil(children: React.ReactNode) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export function withQueryClient(children: React.ReactNode) {
  const testClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
  );
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
