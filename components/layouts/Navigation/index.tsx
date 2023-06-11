import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Icon from '@/components/common/Icon';

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
    <StyledNavigation>
      <div>
        {isBack && (
          <Icon
            name="ArrowRight"
            width={20}
            height={20}
            onClick={onBack || router.back}
          />
        )}
      </div>
      <div>{title}</div>
      <div>{isComplete && <div onClick={onComplete}>완료</div>}</div>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;

  & > div:nth-of-type(1) {
    flex: 0;
    cursor: pointer;
  }

  & > div:nth-of-type(2) {
    flex: auto;
    text-align: center;
    font-weight: bold;
  }

  & > div:nth-of-type(3) {
    flex: 0 0 30px;
    font-weight: bold;
    cursor: pointer;
  }
`;
