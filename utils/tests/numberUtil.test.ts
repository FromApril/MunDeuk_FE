import { getAmountWithComma } from '../numberUtil';

describe('getAmountWithComma', () => {
  it('amount가 0이면, 빈 값을 반환한다', () => {
    expect(getAmountWithComma(0)).toBe('');
  });

  it('amount가 있으면, comma를 포함한 숫자를 반환한다', () => {
    expect(getAmountWithComma(10000)).toContain(',');
  });
});
