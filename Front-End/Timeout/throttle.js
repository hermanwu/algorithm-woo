const throttle = (fn, delay) => {
  let isThrottled = false,
    context;

  return function(...args) {
    if (isThrottled) {
      context = this;
    }

    isThrottled = true;
    fn.apply(context, arg);

    setTimeout(() => {
      isThrottled = false;
    }, wait);
  };
};
