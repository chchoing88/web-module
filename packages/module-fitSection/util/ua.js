const MO_PLATFORM = [
  "iphone",
  "ipad",
  "opera mini",
  "iPod",
  "android",
  "blackberry",
  "ieMobile"
];
const userAgent = navigator.userAgent.toLowerCase();

// const ua = () => {
//   const userInterFace = navigator.userAgent;
//   for (let key in USERAGENT) {
//     if (userInterFace.indexOf(USERAGENT[key]) >= 0) {
//       return USERAGENT[key];
//     }
//   }

//   return "";
// };

const convertArraytoRegExp = array => {
  return new RegExp(array.join("|"), "i");
};

const getPlatform = () => {
  if (userAgent.match(convertArraytoRegExp(MO_PLATFORM))) {
    return "mobile";
  }

  return "pc";
};

export const ua = {
  platform: getPlatform()
};
