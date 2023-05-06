import dayjs from 'dayjs';

import { getDateByFormat, getDday } from '../dateUtil';

describe('getDday', () => {
  it('D-day값을 반환한다', () => {
    const DATE = '20301231';
    const dDay = dayjs(DATE).diff(new Date(), 'day');

    expect(getDday(DATE)).toBe(dDay);
  });
});

describe('getDateByFormat', () => {
  const DATE = new Date('2023-04-06T14:29:30');
  const FORMAT = 'YYYY-MM-DD';

  it('포맷이 정해져 있지 않으면, 날짜를 반환한다', () => {
    expect(getDateByFormat(DATE)).toBe('2023.04.06');
  });

  it('포맷이 정해져 있으면, 날짜 포맷을 반환한다', () => {
    expect(getDateByFormat(DATE, FORMAT)).toBe('2023-04-06');
  });
});
