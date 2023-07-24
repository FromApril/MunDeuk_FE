import { atom } from 'recoil';

import { Location } from '@/interfaces/common';

const DEFAULT_ID = 3;

type User = {
  id: number;
  location: Location;
};

export const userAtom = atom<User>({
  key: 'user/userAtom',
  default: {
    id: DEFAULT_ID,
    location: {
      latitude: 0,
      longitude: 0,
    },
  },
});
