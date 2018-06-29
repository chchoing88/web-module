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
  let result = {
    topValue: Math.floor(
      EASING[easing](time, currentScrollTopValue, changeInValue, duration)
    ),
    status: SCROLL_STATE.COUNTINU
  };

  return result.topValue === targetScrollTopValue
    ? {
      ...result,
      status: SCROLL_STATE.END
    }
    : result;
};

const moveScroll = calculateScrollPosition => ({ ...args }) => {
  let time = 0;
  let calculateScrollPositionByTime = calculateScrollPosition({ ...args });

  const intervalId = setInterval(function() {
    time += INTERVAL_TIME;
    let scrollPosition = calculateScrollPositionByTime(time);

    //console.log(scrollPosition.topValue);

    // window.scrollTo({
    //   top: scrollPosition.topValue
    // });

    window.scrollTo(0, scrollPosition.topValue);

    if (scrollPosition.status === SCROLL_STATE.END) {
      clearInterval(intervalId);
    }
  }, INTERVAL_TIME);
};

export default moveScroll(calculateScrollPosition);
