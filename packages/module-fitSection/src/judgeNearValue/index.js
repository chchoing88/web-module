import isArray from "../../util/isArray";
import isNumber from "../../util/isNumber";

const NO_VALUE = -1;
const HUNDRED = 100;
const MAX_THRESHOLD = 50;

const judgeNearValue = ({
  target = [],
  currentScrollTopValue,
  threshold = MAX_THRESHOLD
}) => {
  let result = 0;

  if (!isArray(target)) {
    throw new TypeError(judgeNearValue.errorMessage.targetError);
  }

  if (!isNumber(currentScrollTopValue)) {
    throw new TypeError(judgeNearValue.errorMessage.currentScrollTopError);
  }

  if (threshold > MAX_THRESHOLD) {
    threshold = MAX_THRESHOLD;
  }

  result = target.reduce((nearValue, currentValue, currentIndex) => {
    if (!isNumber(nearValue) || !isNumber(currentValue)) {
      throw new TypeError(judgeNearValue.errorMessage.targetElementError);
    }

    if (target[currentIndex - 1] !== undefined) {
      let diff = Math.abs(currentValue - target[currentIndex - 1]);
      let thresholdValue = Math.round((diff * threshold) / HUNDRED);

      if (
        currentScrollTopValue >= currentValue - thresholdValue &&
        currentScrollTopValue <= currentValue
      ) {
        return currentValue;
      }
    }

    if (target[currentIndex + 1] !== undefined) {
      let diff = Math.abs(target[currentIndex + 1] - currentValue);
      let thresholdValue = Math.round((diff * threshold) / HUNDRED);

      if (
        currentScrollTopValue >= currentValue &&
        currentScrollTopValue <= currentValue + thresholdValue
      ) {
        return currentValue;
      }
    }

    return nearValue;
  }, NO_VALUE);

  if (result === NO_VALUE) {
    result = currentScrollTopValue;
  }

  return result;
};

judgeNearValue.errorMessage = {
  targetError: "judgeNearValue target type error, array type need",
  currentScrollTopError:
    "judgeNearValue currentScrollTopError type error, number type need",
  targetElementError:
    "judgeNearValue target element type error, target element type number need"
};

export default judgeNearValue;
