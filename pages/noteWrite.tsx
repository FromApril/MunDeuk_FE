import { useRouter } from 'next/router';
import React from 'react';

import ContentsConfirm from '@/templates/noteWrite/ContentsConfirm';
import ContentsWrite from '@/templates/noteWrite/ContentsWrite';
import NoteWriteComplete from '@/templates/noteWrite/NoteWriteComplete';
import SelectEmotion from '@/templates/noteWrite/SelectEmotion';
import SelectLocation from '@/templates/noteWrite/SelectLocation';

export default function NoteWritePage() {
  const router = useRouter();

  const page = Number(router.query.page || 1);

  return (
    <main>
      {page === 1 && <SelectLocation />}
      {page === 2 && <SelectEmotion />}
      {page === 3 && <ContentsWrite />}
      {page === 4 && <ContentsConfirm />}
      {page === 5 && <NoteWriteComplete />}
    </main>
  );
}
