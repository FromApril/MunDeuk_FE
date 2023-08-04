import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';

import Icon from './index';

type Props = ComponentProps<typeof Icon>;

jest.unmock('@/components/common/Icon');

jest.mock('@/public/icons', () => ({
  ArrowRight: (props: Props) => <svg {...props}>ArrowRight</svg>,
  Camera: (props: Props) => <svg {...props}>Camera</svg>,
  Close: (props: Props) => <svg {...props}>Close</svg>,
}));

describe('<Icon />', () => {
  const handleClick = jest.fn();

  const iconName1 = 'ArrowRight';
  const iconName2 = 'Camera';
  const iconName3 = 'Close';

  const defaultProps: Props = {
    name: 'ArrowRight',
    width: 50,
    height: 50,
    onClick: handleClick,
  };

  const renderComponent = (props: Props) => {
    render(<Icon {...props} />);
  };

  it('아이콘 이름(name)에 따른 아이콘이 렌더링되어야 한다.', () => {
    renderComponent(defaultProps);
    renderComponent({
      ...defaultProps,
      name: iconName2,
    });
    renderComponent({
      ...defaultProps,
      name: iconName3,
    });

    expect(screen.getByText(iconName1)).toBeInTheDocument();
    expect(screen.getByText(iconName2)).toBeInTheDocument();
    expect(screen.getByText(iconName3)).toBeInTheDocument();
  });

  it('onClick 핸들러를 실행할 수 있다.', () => {
    renderComponent(defaultProps);

    fireEvent.click(screen.getByText(defaultProps.name));
    expect(handleClick).toBeCalledTimes(1);
  });
});
