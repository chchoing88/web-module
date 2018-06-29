import getCurrentScrollTop from "../getCurrentScrollTop";
import moveScroll from "../moveScroll";
import judgeNearValue from "../judgeNearValue";

// 스크롤 움직임
//const currentScrollTopValue = getCurrentScrollTop(window);

// moveScroll({
//   easing: "easeInExpo",
//   currentScrollTopValue,
//   targetScrollTopValue: 1000,
//   duration: 1000
// });

// let a = judgeNearValue({
//   target: [900, "400", 1400, 1350],
//   value: 1000
// });

// console.log(a);

export default class AutoScroll {
  constructor({ ...args }) {
    this._easing = args.easing || "easeInExpo";
    this._duration = args.duration || 1000;
    this._section = args.section;
    this._sectionHeight = [600, 700, 1500, 2000];
  }

  moveToNearSection() {
    const currentScrollTopValue = getCurrentScrollTop(window);
    const targetScrollTopValue = judgeNearValue({
      target: this._sectionHeight,
      currentScrollTopValue
    });
    moveScroll({
      easing: "easeInExpo",
      currentScrollTopValue,
      targetScrollTopValue,
      duration: this._duration
    });
  }

  _setSectionHeight() {}
}
