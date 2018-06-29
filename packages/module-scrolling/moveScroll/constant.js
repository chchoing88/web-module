// https://easings.net/ko
const EASING = {
  easeInExpo: function easeInExpo(t, b, c, d) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutSine: function(x, t, b, c, d) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  }
};

const SCROLL_STATE = {
  END: -1,
  COUNTINU: 0
};

export { EASING, SCROLL_STATE };
