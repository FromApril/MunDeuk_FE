import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { layouts } from '@/styles/layouts';

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  onClick: () => void;
}

export default function Button({ disabled, children, onClick }: ButtonProps) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: #000;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  width: 100%;
  height: ${layouts.button};

  ${(props) => props.disabled && `background-color: #ddd;`}
`;
