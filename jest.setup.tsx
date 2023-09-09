import '@testing-library/jest-dom/extend-expect';

import { ComponentProps } from 'react';

import Icon from './components/common/Icon';
import { server } from './mocks/server';

type Props = ComponentProps<typeof Icon>;

jest.mock('next/navigation', () => require('next-router-mock'));

jest.mock('@/components/common/Icon', () => {
  return function Icon(props: Props) {
    return <svg onClick={props.onClick}>{props.name}</svg>;
  };
});

jest.mock('@/components/common/EmotionIcon', () => {
  return function Icon(props: Props) {
    return <svg onClick={props.onClick}>{props.name}</svg>;
  };
});

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
