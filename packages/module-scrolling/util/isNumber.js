const isNumber = target =>
  Object.prototype.toString.call(target) === "[object Number]";

export default isNumber;
