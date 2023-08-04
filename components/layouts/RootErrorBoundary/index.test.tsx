import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';

import RootErrorBoundary from '.';

describe('<RootErrorBoundary />', () => {
  const CHILD_TEXT = 'Child';
  const Child = ({ error }: { error?: Error }) => {
    const [cnt, setCnt] = useState(0);

    if (cnt === 1 && error) {
      throw error;
    }

    return <div onClick={() => setCnt((x) => x + 1)}>{CHILD_TEXT}</div>;
  };

  const renderComponent = (error?: Error) => {
    render(
      <RootErrorBoundary>
        <Child error={error} />
      </RootErrorBoundary>,
    );
  };

  let error: Error;

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
    error = new Error('Error');
  });

  context('에러가 있으면', () => {
    it('오류 메시지를 화면에 보여준다.', () => {
      renderComponent(error);

      fireEvent.click(screen.getByText(CHILD_TEXT));

      expect(
        screen.getByText('일시적인 오류가 발생했습니다'),
      ).toBeInTheDocument();
    });

    it('다시 시도하기 버튼을 클릭하면, 에러가 리셋된다.', async () => {
      renderComponent(error);

      fireEvent.click(screen.getByText(CHILD_TEXT));
      fireEvent.click(screen.getByText('다시 시도하기'));

      await waitFor(() => {
        expect(screen.queryByText('일시적인 오류가 발생했습니다')).toBe(null);
      });
    });
  });

  context('에러가 없으면', () => {
    it('자식 컴포넌트를 렌더링한다.', () => {
      renderComponent();

      expect(screen.getByText(CHILD_TEXT)).toBeInTheDocument();
    });
  });
});
