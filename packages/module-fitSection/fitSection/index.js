import getWindowScrollTop from "../getWindowScrollTop";
import moveScroll from "../moveScroll";
import judgeNearValue from "../judgeNearValue";
import calculatePositionTop from "../calculatePositionTop";
import debounce from "../util/debounce";
import EventManager from "./EventManager";

const defaultOptions = {
  easing: "easeInExpo",
  duration: 1000,
  section: ["section1", "section2", "section3"],
  delay: 500
};

export default class FitSection {
  constructor({ ...args }) {
    this._easing = args.easing || defaultOptions.easing;
    this._duration = args.duration || defaultOptions.duration;
    this._section = args.section || defaultOptions.section;
    this._delay = args.delay || defaultOptions.delay;
    this._sectionDom = [];
    this._sectionHeight = [];
    this._moveScrollId = [];

    this._eventManager = new EventManager(window);

    this._setSectionDom();
    this._setSectionHeight();
    this.moveToNearSection();
    this._bindEvent();
  }

  moveToNearSection() {
    const currentScrollTopValue = getWindowScrollTop(window);
    const targetScrollTopValue = judgeNearValue({
      target: this._sectionHeight,
      currentScrollTopValue
    });

    let moveScrollId = moveScroll({
      easing: this._easing,
      currentScrollTopValue,
      targetScrollTopValue,
      duration: this._duration
    });
    this._moveScrollId.push(moveScrollId);
  }

  moveStop() {
    if (this._moveScrollId.length > 0) {
      this._moveScrollId.map(id => clearInterval(id));
    }
  }

  _setSectionDom() {
    this._sectionDom = this._section.map(selector => {
      let sectionElement = document.getElementById(selector);
      if (sectionElement instanceof HTMLElement) {
        return sectionElement;
      }
    });
  }

  _setSectionHeight() {
    this._sectionHeight = this._sectionDom.map(elem => {
      if (elem instanceof HTMLElement) {
        return calculatePositionTop(elem);
      }

      return 0;
    });
  }

  _scrollHandler() {
    const self = this;
    return debounce(() => self.moveToNearSection(), self._delay);
  }

  _resizeHandler() {
    const self = this;
    const RESIZE_DEBOUNCE_TIME = 250;

    return debounce(() => {
      self._eventManager.off("scroll", self._scrollHandler());
      self._setSectionHeight.call(self);
      self.moveToNearSection.call(self);

      self._eventManager.on("scroll", self._scrollHandler());
    }, RESIZE_DEBOUNCE_TIME);
  }

  _bindEvent() {
    this._eventManager.on("scroll", this._scrollHandler());
    this._eventManager.on("mousewheel", this.moveStop.bind(this));
    this._eventManager.on("touchmove", this.moveStop.bind(this));

    this._eventManager.on("resize", this._resizeHandler());
  }

  _unbindEvent() {
    this._eventManager.offAll();
  }
}
