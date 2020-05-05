import { Platform, StatusBar } from "react-native";
import { height, width } from "./dimensions";

const iPhoneXWidth = 375;
const iPhoneXHeight = 812;
const iPhoneXSMaxWidth = 414;
const iPhoneXSMaxHeight = 896;

let iPhonex = false;
let iPhoneXSMax = false;
let haveNotch = false;

if (Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS) {
  if (width === iPhoneXWidth && height === iPhoneXHeight) {
    haveNotch = true;
    iPhonex = true;
  }

  if (width === iPhoneXSMaxWidth && height === iPhoneXSMaxHeight) {
    haveNotch = true;
    iPhoneXSMax = true;
  }
}

export default (leaveAndroid) => {
  return Platform.select({
    ios: haveNotch ? 35 : 10,
    android: leaveAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
};
