// https://easings.net/ko
// https://kodhus.com/easings/
// https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
// http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js

const pow = Math.pow,
  sqrt = Math.sqrt,
  sin = Math.sin,
  cos = Math.cos,
  PI = Math.PI,
  c1 = 1.70158,
  c2 = c1 * 1.525,
  c3 = c1 + 1,
  c4 = (2 * PI) / 3,
  c5 = (2 * PI) / 4.5;

const EASING = {
  easeInExpo: function(t, b, c, d) {
    return t === 0 ? b : c * pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutSine: function(t, b, c, d) {
    return c * sin((t / d) * (PI / 2)) + b;
  }
};

const SCROLL_STATE = {
  END: -1,
  CONTINUE: 0
};

export { EASING, SCROLL_STATE };
