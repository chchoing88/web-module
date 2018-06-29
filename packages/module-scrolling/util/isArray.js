const isArray = target =>
  Object.prototype.toString.call(target) === "[object Array]";

export default isArray;
