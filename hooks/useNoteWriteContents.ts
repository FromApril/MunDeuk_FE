import { useRecoilState, useResetRecoilState } from 'recoil';

import { emotionAtom, locationAtom, textAtom } from '@/recoil/noteWrite/atoms';
import { photosAtom } from '@/recoil/noteWrite/atoms';
import { musicAtom } from '@/recoil/noteWrite/atoms';

export default function useNoteWriteContents() {
  const [location, setLocation] = useRecoilState(locationAtom);
  const [text, setText] = useRecoilState(textAtom);
  const [photos, setPhotos] = useRecoilState(photosAtom);
  const [music, setMusic] = useRecoilState(musicAtom);
  const [emotion, setEmotion] = useRecoilState(emotionAtom);

  const resetLocation = useResetRecoilState(locationAtom);
  const resetText = useResetRecoilState(textAtom);
  const resetPhotos = useResetRecoilState(photosAtom);
  const resetMusic = useResetRecoilState(musicAtom);
  const resetEmotion = useResetRecoilState(emotionAtom);

  const resetAllContents = () => {
    resetLocation();
    resetText();
    resetPhotos();
    resetMusic();
    resetEmotion();
  };

  const isLocationEmpty = location.latitude === 0 && location.longitude === 0;
  const isLocationError = location.latitude === -1 && location.longitude === -1;

  return {
    isLocationEmpty,
    isLocationError,
    location,
    text,
    photos,
    music,
    emotion,
    setLocation,
    setText,
    setPhotos,
    setMusic,
    setEmotion,
    resetLocation,
    resetText,
    resetPhotos,
    resetMusic,
    resetEmotion,
    resetAllContents,
  };
}
