import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { rest } from 'msw';
import mockRouter from 'next-router-mock';
import { MutableSnapshot } from 'recoil';

import { BASE_URL } from '@/mocks/common';
import { server } from '@/mocks/server';
import { emotionAtom, photosAtom, textAtom } from '@/recoil/noteWrite/atoms';
import {
  getInitializeState,
  withQueryClient,
  withRecoilRoot,
} from '@/tests/util';

import ContentsConfirm from '../ContentsConfirm';

describe('<ContentsConfirm />', () => {
  const renderComponent = (
    initializeState: (mutableSnapshot: MutableSnapshot) => void,
  ) => {
    render(
      withQueryClient(withRecoilRoot(<ContentsConfirm />, initializeState)),
    );
  };

  context('컨텐츠에 대하여', () => {
    it('텍스트 콘텐츠가 있으면, 텍스트 아이콘이 렌더링된다.', () => {
      const initializeState = getInitializeState(textAtom, 'Atom');

      renderComponent(initializeState);
      expect(screen.getByText('Text')).toBeInTheDocument();
    });

    it('사진 컨텐츠가 있으면, 사진 아이콘이 렌더링된다.', () => {
      const initializeState = getInitializeState(photosAtom, []);

      renderComponent(initializeState);
    });

    it('감정 정보가 있으면, 감정 아이콘이 렌더링된다.', () => {
      const initializeState = getInitializeState(emotionAtom, 'Depressed');

      renderComponent(initializeState);
      expect(screen.getByText('Depressed')).toBeInTheDocument();
    });
  });

  context('쪽지 작성완료 버튼을 클릭', () => {
    beforeEach(() => {
      const initializeState = getInitializeState(textAtom, '테스트');
      renderComponent(initializeState);

      act(() => {
        mockRouter.push('/');
      });
    });

    it('성공 시, 작성완료 페이지로 이동한다.', async () => {
      fireEvent.click(screen.getByText('쪽지 작성완료'));

      await waitFor(() => {
        expect(mockRouter).toMatchObject({
          asPath: '/noteWrite?page=5',
        });
      });
    });

    it('실패 시, 에러 메시지를 보여준다.', async () => {
      server.use(
        rest.post(BASE_URL + '/note/withImage', (_, res, ctx) => {
          return res(ctx.status(500));
        }),
      );

      window.alert = jest.fn();

      fireEvent.click(screen.getByText('쪽지 작성완료'));
      await waitFor(() => {
        expect(window.alert).toBeCalledWith('쪽지 작성하기를 실패했습니다.');
      });
    });
  });
});
