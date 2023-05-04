import * as Sentry from '@sentry/nextjs';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default function withGetServerSideProps(
  getServerSideProps: GetServerSideProps,
): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    try {
      // if (context.req && context.req.cookies) {
      //   client.defaults.headers['cookies'] = context.req.cookies;
      // }

      return await getServerSideProps(context);
    } catch (e) {
      Sentry.captureException(e);
      console.log(e);

      return {
        notFound: true,
      };
    }
  };
}
