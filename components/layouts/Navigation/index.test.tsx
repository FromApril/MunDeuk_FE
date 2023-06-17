import { fireEvent, render, screen } from '@testing-library/react';

import Navigation from '.';

describe('<Navigation/>', () => {
  const renderComponent = (props?: React.ComponentProps<typeof Navigation>) => {
    return render(<Navigation {...props} />);
  };

  it('타이틀이 있으면 타이틀 내용을 보여준다.', () => {
    renderComponent({ title: '제목입니다' });
    expect(screen.getByText('제목입니다')).toBeInTheDocument();
  });

  // it('백 버튼이 있으면, onBack 핸들러를 실행할 수 있다.', () => {
  //   const handleBack = jest.fn();

  //   renderComponent({ isBack: true, onBack: handleBack });

  //   fireEvent.click(screen.getByLabelText('아이콘'));
  // });

  // it('완료 버튼이 있으면, onComplete 핸들러를 실행할 수 있다.', () => {});
});
