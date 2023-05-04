// import * as Sentry from '@sentry/nextjs';

// import ErrorFallback from '@/components/layouts/ErrorFallback';

// 5xx 에러 대응
function ErrorPage() {
  return (
    <div>ErrorPage</div>
    // <ErrorFallback isHideHomeButton />
  );
}

ErrorPage.getInitialProps = ({ error }: any) => {
  // Sentry.captureException(error);

  return { error };
};

export default ErrorPage;
