import { throttle, debounce } from "../commonUtil";

describe("throttle", () => {
  test("callback 함수가 실행되어야 한다", (done) => {
    const callback = jest.fn(() => "hello");

    const testCallback = () => {
      callback();
      expect(callback.mock.calls.length).toBe(1);

      done();
    };

    throttle(testCallback, 100);
  });
});

describe("debounce", () => {
  test("callback 함수가 실행되어야 한다", (done) => {
    const callback = jest.fn(() => "hello");

    const testCallback = () => {
      callback();
      expect(callback.mock.calls.length).toBe(1);

      done();
    };

    debounce(testCallback, 100);
  });
});
