import { useRecoilState } from 'recoil';

import { userAtom } from '@/recoil/user/atoms';

export default function useUser() {
  const [user, setUser] = useRecoilState(userAtom);

  return {
    user,
    setUser,
  };
}
