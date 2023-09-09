import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

import Icon from '@/components/common/Icon';

type NavigationProps = {
  children: React.ReactNode;
};

type BackProps = {
  onClick?: () => void;
};

type TitleProps = {
  children: React.ReactNode;
};

type CompleteProps = {
  onClick: () => void;
};

function Navigation({ children }: NavigationProps) {
  return <StyledNavigation>{children}</StyledNavigation>;
}

function Back({ onClick }: BackProps) {
  const router = useRouter();

  return (
    <StyledBack>
      <Icon
        name="ArrowRight"
        width={20}
        height={20}
        onClick={onClick || router.back}
      />
    </StyledBack>
  );
}

function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>;
}

function Complete({ onClick }: CompleteProps) {
  return <StyledComplete onClick={onClick}>완료</StyledComplete>;
}

export default Object.assign(Navigation, {
  Back,
  Title,
  Complete,
});

const StyledNavigation = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
`;

const StyledBack = styled.div`
  flex: 0 0 30px;
  cursor: pointer;
`;

const StyledTitle = styled.div`
  flex: auto;
  max-width: calc(100% - 70px);
  text-align: center;
  font-weight: bold;
`;

const StyledComplete = styled.div`
  flex: 0 0 30px;
  font-weight: bold;
  cursor: pointer;
`;
