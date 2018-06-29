import isArray from "../util/isArray";
import isNumber from "../util/isNumber";

const judgeNearValue = ({ target = [], currentScrollTopValue }) => {
  let result = 0;

  if (!isArray(target)) {
    throw new TypeError(judgeNearValue.errorMessage.targetError);
  }

  if (!isNumber(currentScrollTopValue)) {
    throw new TypeError(judgeNearValue.errorMessage.currentScrollTopError);
  }

  result = target.reduce((nearValue, targetValue) => {
    if (!isNumber(nearValue) || !isNumber(targetValue)) {
      throw new TypeError(judgeNearValue.errorMessage.targetElementError);
    }
    let diffNearValue = Math.abs(currentScrollTopValue - nearValue);
    let diffTargetValue = Math.abs(currentScrollTopValue - targetValue);

    return diffNearValue < diffTargetValue ? nearValue : targetValue;
  });

  return result;
};

judgeNearValue.errorMessage = {
  targetError: "judgeNearValue target type error, array type need",
  currentScrollTopError:
    "judgeNearValue currentScrollTopError type error, number type need",
  targetElementError:
    "target element type error, target element type number need"
};

export default judgeNearValue;
