import { useRouter } from 'next/router';

import Icons from '@/components/common/Icons';

type NavigationProps = {
  isBack?: boolean;
  isComplete?: boolean;
  title?: string;
  onBack?: () => void;
  onComplete?: () => void;
};

export default function Navigation({
  isBack,
  isComplete,
  title,
  onBack,
  onComplete,
}: NavigationProps) {
  const router = useRouter();

  return (
    <div className="flex items-center px-5 h-11">
      <div className="flex-none">
        {isBack && (
          <Icons
            name="ArrowRight"
            width={20}
            height={20}
            onClick={onBack || router.back}
          />
        )}
      </div>
      <div className="flex-auto font-bold text-center">{title}</div>
      <div className="flex-none">
        {isComplete && (
          <div className="font-bold cursor-pointer" onClick={onComplete}>
            완료
          </div>
        )}
      </div>
    </div>
  );
}
