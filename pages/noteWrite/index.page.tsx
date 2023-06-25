import { useRouter } from 'next/router';

import ContentsConfirm from '@/templates/noteWrite/ContentsConfirm';
import ContentsWrite from '@/templates/noteWrite/ContentsWrite';
import EmotionSelect from '@/templates/noteWrite/EmotionSelect';
import LocationSelect from '@/templates/noteWrite/LocationSelect';
import NoteWriteComplete from '@/templates/noteWrite/NoteWriteComplete';

export default function NoteWritePage() {
  const router = useRouter();

  const page = Number(router.query.page || 1);

  return (
    <>
      {page === 1 && <LocationSelect />}
      {page === 2 && <EmotionSelect />}
      {page === 3 && <ContentsWrite />}
      {page === 4 && <ContentsConfirm />}
      {page === 5 && <NoteWriteComplete />}
    </>
  );
}
