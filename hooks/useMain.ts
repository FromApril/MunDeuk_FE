import { useRecoilState } from 'recoil';

import { mainAtom } from '@/recoil/main/atoms';

export default function useMain() {
  const [main, setMain] = useRecoilState(mainAtom);

  return {
    main,
    setMain,
  };
}
