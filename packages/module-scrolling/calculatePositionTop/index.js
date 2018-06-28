// position top 위치 계산
const calculatePositionTop = elem => {
  if (elem instanceof HTMLElement) {
    return elem.offsetTop;
  }

  return new TypeError("element type Error, element instanceof HTMLElement");
};

export default calculatePositionTop;
