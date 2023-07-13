import { useRouter } from 'next/router';

import ContentsValidation from '@/components/pages/noteWrite/ContentsValidation';
import ContentsConfirm from '@/components/templates/noteWrite/ContentsConfirm';
import ContentsWrite from '@/components/templates/noteWrite/ContentsWrite';
import EmotionSelect from '@/components/templates/noteWrite/EmotionSelect';
import LocationSelect from '@/components/templates/noteWrite/LocationSelect';
import NoteWriteComplete from '@/components/templates/noteWrite/NoteWriteComplete';

export default function NoteWritePage() {
  const router = useRouter();

  const page = Number(router.query.page || 1);

  return (
    <ContentsValidation>
      {page === 1 && <LocationSelect />}
      {page === 2 && <EmotionSelect />}
      {page === 3 && <ContentsWrite />}
      {page === 4 && <ContentsConfirm />}
      {page === 5 && <NoteWriteComplete />}
    </ContentsValidation>
  );
}
