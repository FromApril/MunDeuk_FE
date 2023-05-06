import { debounce, throttle } from '../commonUtil';

const callback = jest.fn(() => 'hello');
const testCallback = (done: jest.DoneCallback) => {
  callback();
  expect(callback.mock.calls.length).toBe(1);

  done();
};

describe('throttle', () => {
  it('callback 함수가 실행되어야 한다', (done) => {
    throttle(() => testCallback(done), 100)();
  });
});

describe('debounce', () => {
  it('callback 함수가 실행되어야 한다', (done) => {
    debounce(() => testCallback(done), 100)();
  });
});
