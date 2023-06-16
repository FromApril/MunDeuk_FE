import { atom } from 'recoil';

import { Location } from '@/interfaces/common';

type User = {
  location: Location;
};

export const userAtom = atom<User>({
  key: 'user/userAtom',
  default: {
    location: {
      latitude: 0,
      longitude: 0,
    },
  },
});
