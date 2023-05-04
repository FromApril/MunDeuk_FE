export const throttle = (callback: Function, delay: number = 0) => {
  let waiting = false;

  return () => {
    if (waiting) {
      return;
    }
    waiting = true;

    setTimeout(() => {
      callback();
      waiting = false;
    }, delay);
  };
};

export const debounce = (callback: Function, delay: number) => {
  let timerId: NodeJS.Timer;

  return () => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback();
    }, delay);
  };
};
