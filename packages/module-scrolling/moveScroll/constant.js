const EASING = {
  easeInExpo: function easeInExpo(t, b, c, d) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }
};

const SCROLL_STATE = {
  END: -1,
  COUNTINU: 0
};

export { EASING, SCROLL_STATE };
