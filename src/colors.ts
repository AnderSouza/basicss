export const primary = "#808080";
export const secondary = "#6495ED";
export const success = "#32CD32";
export const info = "#20B2AA";
export const warning = "#FFA500";
export const error = "#FF4500";
export const gainsboro = "#DCDCDC";
export const whitesmoke = "#F0F0F0";
export const springgreen = "#00FF7F";
export const limegreen = "#20B2AA";
export const darkgray = "#A9A9A9";
export const lightgray = "#D0D0D0";

const convertHexToRGBA = (hexColor: string, opacity: number) => {
  let r, g, b;
  hexColor = hexColor.substr(1);
  r = parseInt(hexColor.substr(0, 2), 16);
  g = parseInt(hexColor.substr(2, 2), 16);
  b = parseInt(hexColor.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default {
  primary,
  secondary,
  success,
  info,
  warning,
  error,
  gainsboro,
  whitesmoke,
  springgreen,
  limegreen,
  darkgray,
  lightgray,
  convertHexToRGBA,
};
