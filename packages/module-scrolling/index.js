import getCurrentScrollTop from "./getCurrentScrollTop";
import moveScroll from "./moveScroll";
const dom = document.querySelector(".section_guide");

// 스크롤 움직임
const currentScrollTopValue = getCurrentScrollTop(window);

moveScroll({
  easing: "easeInExpo",
  currentScrollTopValue,
  targetScrollTopValue: 1000,
  duration: 1000
});

//aa("easeInExpo", 1000, 1000);

// setTimeout(function() {
//   window.scrollTo({
//     top: 1000
//   });
// }, 1000);
