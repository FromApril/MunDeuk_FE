import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';

import EmotionIcon from '.';

type Props = ComponentProps<typeof EmotionIcon>;

jest.mock('@/components/common/EmotionIcon', () => {
  return function Icon({ name, onClick }: Props) {
    return (
      <svg data-test-id={name} onClick={onClick}>
        {name}
      </svg>
    );
  };
});

describe('<EmotionIcon />', () => {
  const iconName1 = 'Default';
  const iconName2 = 'Depressed';

  const handleClick = jest.fn();
  const DefaultProps: Props = {
    name: 'Default',
    width: 30,
    height: 30,
    fill: 'blue',
    onClick: handleClick,
  };

  const renderComponent = (props: Props) => {
    render(<EmotionIcon {...props} />);
  };

  it('name 값에 맞는 아이콘을 렌더링한다.', () => {
    renderComponent(DefaultProps);
    renderComponent({ ...DefaultProps, name: iconName2 });

    expect(screen.getByText(iconName1)).toBeInTheDocument();
    expect(screen.getByText(iconName2)).toBeInTheDocument();
  });

  it('클릭하면, 이벤트 핸들러를 실행한다.', () => {
    renderComponent(DefaultProps);

    fireEvent.click(screen.getByText(iconName1));
    expect(handleClick).toBeCalledTimes(1);
  });
});
