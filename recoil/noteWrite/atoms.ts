import { atom } from 'recoil';

import { EmotionType } from '@/interfaces/note';

export const locationAtom = atom({
  key: '/noteWrite/locationAtom',
  default: {
    latitude: 0,
    longitude: 0,
  },
});

export const emotionAtom = atom<EmotionType>({
  key: '/noteWrite/emotionAtom',
  default: 'Glad',
});

export const textAtom = atom({
  key: '/noteWrite/textAtom',
  default: '',
});

export const photosAtom = atom<File[]>({
  key: '/noteWrite/photosAtom',
  default: [],
});

export const musicAtom = atom({
  key: '/noteWrite/musicAtom',
  default: {
    imgUrl: '',
    title: '',
    artist: '',
  },
});
