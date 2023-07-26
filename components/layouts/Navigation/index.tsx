import styled from '@emotion/styled';
import { useRouter } from 'next/router';

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

Navigation.Back = function Back({ onClick }: BackProps) {
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
};

Navigation.Title = function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>;
};

Navigation.Complete = function Complete({ onClick }: CompleteProps) {
  return <StyledComplete onClick={onClick}>완료</StyledComplete>;
};

export default Navigation;

const StyledNavigation = styled.div`
  background-color: #fff;
  display: grid;
  align-items: center;
  padding: 0 20px;
  height: 50px;
`;

const StyledBack = styled.div`
  flex: 0;
  cursor: pointer;
`;

const StyledTitle = styled.div`
  flex: auto;
  text-align: center;
  font-weight: bold;
`;

const StyledComplete = styled.div`
  flex: 0 0 30px;
  justify-self: flex-end;
  font-weight: bold;
  cursor: pointer;
`;
