export const throttle = (callback: () => void, delay: number) => {
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

export const debounce = (callback: () => void, delay: number) => {
  let timerId: NodeJS.Timer;

  return () => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback();
    }, delay);
  };
};
