import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { layouts } from '@/styles/layouts';

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  variant: 'primary' | 'dashed';
  onClick?: () => void;
}

export default function Button({
  variant,
  disabled,
  children,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  variant: ButtonProps['variant'];
  disabled: ButtonProps['disabled'];
}>`
  border-radius: 8px;
  width: 100%;
  height: ${layouts.button};

  ${(props) =>
    props.variant === 'primary' &&
    `
    background-color: #000;
    color: #fff;
    font-weight: 700;
  `}
  ${(props) =>
    props.variant === 'dashed' &&
    `
    border: dashed 1px #e4e4e4;
    background-color: #fff;
    color: #555;
    font-weight: 600;
  `}
  ${(props) => props.disabled && `background-color: #ddd;`}
`;
