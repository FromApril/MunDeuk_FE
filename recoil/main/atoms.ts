import { atom } from 'recoil';

import { Location } from '@/interfaces/common';

type MainAtom = {
  mapLevel: number;
  location: Location;
};

export const mainAtom = atom<MainAtom>({
  key: '/main/mainAtom',
  default: {
    mapLevel: 1,
    location: {
      latitude: 0,
      longitude: 0,
    },
  },
});
