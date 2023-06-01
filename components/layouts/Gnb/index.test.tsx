import { act, fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import Gnb from './index';

describe('<Gnb/>', () => {
  const renderComponent = () => render(<Gnb />);
  const HOME_PATH = '/home';
  const ADD_POST_PATH = '/addPost';
  const MY_PAGE_PATH = '/myPage';

  beforeEach(() => {
    renderComponent();

    act(() => {
      mockRouter.push('/');
    });
  });

  it('홈 아이콘이 존재해야 한다.', () => {
    expect(screen.getByLabelText('홈')).toBeInTheDocument();
  });

  it('홈 아이콘을 클릭하면, 홈으로 이동한다.', () => {
    const Icon = screen.getByLabelText('홈');
    fireEvent.click(Icon);

    expect(mockRouter).toMatchObject({
      pathname: HOME_PATH,
    });
  });

  it('쪽지작성 아이콘이 존재해야 한다.', () => {
    expect(screen.getByLabelText('쪽지작성')).toBeInTheDocument();
  });

  it('쪽지작성 아이콘을 클릭하면, 쪽지작성 페이지로 이동한다.', () => {
    const Icon = screen.getByLabelText('쪽지작성');
    fireEvent.click(Icon);

    expect(mockRouter).toMatchObject({
      pathname: ADD_POST_PATH,
    });
  });

  it('마이페이지 아이콘이 존재해야 한다.', () => {
    expect(screen.getByLabelText('마이페이지')).toBeInTheDocument();
  });

  it('마이페이지 아이콘을 클릭하면, 마이페이지로 이동한다.', () => {
    const Icon = screen.getByLabelText('마이페이지');
    fireEvent.click(Icon);

    expect(mockRouter).toMatchObject({
      pathname: MY_PAGE_PATH,
    });
  });
});
