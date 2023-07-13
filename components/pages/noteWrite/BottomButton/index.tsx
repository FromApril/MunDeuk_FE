import { useRouter } from 'next/router';
import { ComponentProps } from 'react';

import Button from '@/components/common/Button';
import BottomLayout from '@/components/layouts/BottomLayout';

type ButtonProps = ComponentProps<typeof Button>;

type BottomButtonProps = {
  children?: React.ReactNode;
  variant: ButtonProps['variant'];
  nextUrl?: string;
  disabled?: ButtonProps['disabled'];
  onClick?: () => void;
};

export default function BottomButton({
  children,
  variant,
  nextUrl,
  disabled,
  onClick,
}: BottomButtonProps) {
  const router = useRouter();

  const goNextPage = () => {
    if (nextUrl) {
      router.push(nextUrl);
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    goNextPage();
  };

  return (
    <BottomLayout>
      <Button variant={variant} disabled={disabled} onClick={handleClick}>
        {children}
      </Button>
    </BottomLayout>
  );
}
