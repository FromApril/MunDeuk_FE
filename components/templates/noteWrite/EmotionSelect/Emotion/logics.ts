import { useRouter } from 'next/router';

import useNoteWriteContents from '@/hooks/useNoteWriteContents';

export default function useEmotion() {
  const router = useRouter();
  const { emotion, setEmotion } = useNoteWriteContents();

  const handleComplete = () => {
    router.push('/noteWrite?page=3');
  };

  return {
    emotion,
    setEmotion,
    handleComplete,
  };
}
