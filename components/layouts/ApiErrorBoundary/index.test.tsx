import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AxiosError } from 'axios';
import { useState } from 'react';

import ApiErrorBoundary from '.';

describe('<ApiErrorBoundary />', () => {
  const CHILD_TEXT = 'Child';
  const Child = ({ error }: { error?: Error }) => {
    const [cnt, setCnt] = useState(0);

    if (cnt === 1 && error) {
      throw error;
    }

    return <div onClick={() => setCnt((x) => x + 1)}>{CHILD_TEXT}</div>;
  };

  const renderComponent = (error?: Error) =>
    render(
      <ApiErrorBoundary>
        <Child error={error} />
      </ApiErrorBoundary>,
    );

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
  });

  context('에러가 없는 경우', () => {
    it('자식 컴포넌트를 화면에 보여줘야 한다.', () => {
      renderComponent();

      expect(screen.getByText(CHILD_TEXT)).toBeInTheDocument();
    });
  });

  context('에러가 있는 경우', () => {
    it('Axios 에러가 발생하면, Fallback UI를 보여준다.', () => {
      renderComponent(new AxiosError('AxiosError'));

      fireEvent.click(screen.getByText(CHILD_TEXT));

      expect(
        screen.getByText('일시적인 오류가 발생했습니다'),
      ).toBeInTheDocument();
    });

    it('다시 시도하기 버튼을 클릭하면, 에러가 리셋된다.', async () => {
      renderComponent(new AxiosError('AxiosError'));

      fireEvent.click(screen.getByText(CHILD_TEXT));
      fireEvent.click(screen.getByText('다시 시도하기'));

      await waitFor(() => {
        expect(screen.queryByText('일시적인 오류가 발생했습니다')).toBe(null);
      });
    });

    it('Axios 에러가 아닌 다른 에러이면, 에러를 throw한다.', async () => {
      const error = new Error('NormalError');

      try {
        renderComponent(error);
        fireEvent.click(screen.getByText(CHILD_TEXT));
      } catch (e) {
        expect(e).toMatchObject(error);
      }

      expect(screen.queryByText('일시적인 오류가 발생했습니다')).toBe(null);
    });
  });
});
