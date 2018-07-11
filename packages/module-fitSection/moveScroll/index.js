import { EASING, SCROLL_STATE } from "./constant";

const INTERVAL_TIME = 10;
// 시간에 따른 스크롤 위치값 계산

const calculateScrollPosition = ({
  easing,
  currentScrollTopValue,
  targetScrollTopValue,
  duration
}) => time => {
  const changeInValue = targetScrollTopValue - currentScrollTopValue;

  const result = {
    topValue: Math.floor(
      EASING[easing](0, time, currentScrollTopValue, changeInValue, duration)
    ),
    status: SCROLL_STATE.CONTINUE
  };
  return result.topValue === targetScrollTopValue
    ? {
      ...result,
      status: SCROLL_STATE.END
    }
    : result;
};

const moveScroll = ({ ...args }) => {
  let time = 0;
  const calculateScrollPositionByTime = calculateScrollPosition({ ...args });

  const intervalId = setInterval(function() {
    time += INTERVAL_TIME;
    const scrollPosition = calculateScrollPositionByTime(time);

    window.scrollTo(0, scrollPosition.topValue);

    if (scrollPosition.status === SCROLL_STATE.END) {
      clearInterval(intervalId);
    }
  }, INTERVAL_TIME);

  return intervalId;
};

export default moveScroll;
