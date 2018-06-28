// 현재 스크롤값 구하기
const getCurrentScrollTop = elem => {
  if (elem instanceof Window) {
    return elem.pageYOffset;
  }

  return new TypeError("element type Error, element instanceof Window");
};

export default getCurrentScrollTop;
