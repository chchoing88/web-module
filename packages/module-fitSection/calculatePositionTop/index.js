// position top 위치 계산
const calculatePositionTop = elem => {
  if (elem instanceof HTMLElement) {
    return elem.offsetTop;
  }

  throw new TypeError(calculatePositionTop.errorMessage.typeError);
};

export default calculatePositionTop;

calculatePositionTop.errorMessage = {
  typeError: "element type Error, element instanceof HTMLElement"
};
