import { fireEvent, render, screen } from '@testing-library/react';

import Navigation from '.';

describe('<Navigation/>', () => {
  it('타이틀이 있으면 타이틀 내용을 보여준다.', () => {
    render(
      <Navigation>
        <Navigation.Title>제목입니다</Navigation.Title>
      </Navigation>,
    );
    expect(screen.getByText('제목입니다')).toBeInTheDocument();
  });

  it('백 버튼이 있으면, onClick 핸들러를 실행할 수 있다.', () => {
    const handleClick = jest.fn();

    render(
      <Navigation>
        <Navigation.Back onClick={handleClick} />
      </Navigation>,
    );

    fireEvent.click(screen.getByText('ArrowRight'));

    expect(handleClick).toBeCalledTimes(1);
  });

  it('완료 버튼이 있으면, onClick 핸들러를 실행할 수 있다.', () => {
    const handleClick = jest.fn();

    render(
      <Navigation>
        <Navigation.Complete onClick={handleClick} />
      </Navigation>,
    );

    fireEvent.click(screen.getByText('완료'));

    expect(screen.getByText('완료')).toBeInTheDocument();
    expect(handleClick).toBeCalledTimes(1);
  });
});
