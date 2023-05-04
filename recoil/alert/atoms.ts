import { atom } from 'recoil';

import { AlertProps } from '@/components/common/Alert';

export const alertState = atom<AlertProps>({
  key: 'common/alertState',
  default: {
    isOpen: false,
    className: '',
    children: null,
    title: '',
    msg: '',
    msgs: [''],
    type: 1,
  },
});
