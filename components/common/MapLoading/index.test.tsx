import { render } from '@testing-library/react';

import MapLoading from '.';

describe('<MapLoading />', () => {
  it('로딩 컴포넌트를 화면에 렌더링한다.', () => {
    render(<MapLoading />);
  });
});
