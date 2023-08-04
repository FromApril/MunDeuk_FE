import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';

import Button from './index';

describe('<Button>', () => {
  const BUTTON_TEXT = '버튼';
  const handleClick = jest.fn();

  const renderButton = (props: ComponentProps<typeof Button>) => {
    render(<Button {...props}>{BUTTON_TEXT}</Button>);
  };

  it('버튼 내부에 children을 렌더링 한다.', () => {
    renderButton({ variant: 'primary' });

    expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
  });

  it('버튼을 클릭하면, 클릭 핸들러 함수를 실행한다.', () => {
    renderButton({ variant: 'dashed', onClick: handleClick });

    fireEvent.click(screen.getByText(BUTTON_TEXT));

    expect(handleClick).toBeCalledTimes(1);
  });

  it('disabled 상태이면, 클릭 핸들러 함수가 작동하지 않는다.', () => {
    renderButton({ variant: 'primary', disabled: true, onClick: handleClick });

    fireEvent.click(screen.getByText(BUTTON_TEXT));

    expect(handleClick).toBeCalledTimes(0);
  });
});
