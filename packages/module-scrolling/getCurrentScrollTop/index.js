// 현재 스크롤값 구하기
const getCurrentScrollTop = elem => {
  if (elem instanceof Window) {
    return elem.pageYOffset;
  }

  throw new TypeError(getCurrentScrollTop.errorMessage.typeError);
};

export default getCurrentScrollTop;

getCurrentScrollTop.errorMessage = {
  typeError: "element type Error, element instanceof Window"
};
