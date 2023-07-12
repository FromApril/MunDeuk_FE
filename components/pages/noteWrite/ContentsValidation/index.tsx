import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import useNoteWriteContents from '@/hooks/useNoteWriteContents';

export default function ContentsValidation({ children }: PropsWithChildren) {
  const router = useRouter();
  const { isLocationEmpty, isLocationError, text } = useNoteWriteContents();

  const page = Number(router.query.page || 1);
  const condInPage2 = [isLocationEmpty, isLocationError];
  const condInPage3 = [...condInPage2];
  const condInPage4 = [...condInPage3, text === ''];

  const isError = (cond: boolean[]) => {
    return cond.some((v) => v);
  };

  const validatePage = () => {
    let isValidate = true;

    if (page === 2 && isError(condInPage2)) {
      isValidate = false;
    }

    if (page === 3 && isError(condInPage3)) {
      isValidate = false;
    }

    if (page === 4 && isError(condInPage4)) {
      isValidate = false;
    }

    if (isValidate === false) {
      showErrorMessage();
    }
  };

  const showErrorMessage = () => {
    alert('잘못된 경로로 접근했습니다.');

    router.replace('/home');
  };

  useEffect(() => {
    validatePage();
  }, [page]);

  return <>{children}</>;
}
