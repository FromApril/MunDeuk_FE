import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { AlertProps } from '@/components/common/Alert';
import { alertState } from '@/recoil/alert/atoms';

function useAlert() {
  const [alert, setAlert] = useRecoilState(alertState);

  const openAlert = useCallback((alert: AlertProps) => {
    setAlert({
      ...alert,
    });
  }, []);

  const closeAlert = useCallback(() => {
    setAlert({
      isOpen: false,
    });
  }, []);

  return { alert, openAlert, closeAlert };
}

export default useAlert;
