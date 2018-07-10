// 현재 스크롤값 구하기
const getWindowScrollTop = () => {
  if (window.pageXOffset !== undefined) {
    // All browsers, except IE9 and earlier
    return window.pageYOffset;
  } else {
    // IE9 and earlier
    return document.documentElement.scrollTop;
  }
};

export default getWindowScrollTop;
