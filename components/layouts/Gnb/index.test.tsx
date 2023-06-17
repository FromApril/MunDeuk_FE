import { act, fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import Gnb from './index';

describe('<Gnb/>', () => {
  const renderComponent = () => render(<Gnb />);

  beforeEach(() => {
    renderComponent();

    act(() => {
      mockRouter.push('/');
    });
  });

  it('아이콘은 홈, 쪽지작성, 마이페이지가 존재한다.', () => {
    expect(screen.getByLabelText('홈')).toBeInTheDocument();
    expect(screen.getByLabelText('쪽지작성')).toBeInTheDocument();
    expect(screen.getByLabelText('마이페이지')).toBeInTheDocument();
  });

  it('홈 아이콘을 클릭하면, 홈으로 이동한다.', () => {
    const Icon = screen.getByLabelText('홈');
    fireEvent.click(Icon);

    expect(mockRouter).toMatchObject({
      pathname: '/home',
    });
  });

  it('쪽지작성 아이콘을 클릭하면, 쪽지작성 페이지로 이동한다.', () => {
    const Icon = screen.getByLabelText('쪽지작성');
    fireEvent.click(Icon);

    expect(mockRouter).toMatchObject({
      pathname: '/noteWrite',
    });
  });

  it('마이페이지 아이콘을 클릭하면, 마이페이지로 이동한다.', () => {
    const Icon = screen.getByLabelText('마이페이지');
    fireEvent.click(Icon);

    expect(mockRouter).toMatchObject({
      pathname: '/myPage',
    });
  });
});
