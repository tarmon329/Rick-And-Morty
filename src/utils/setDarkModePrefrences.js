import { DARKMODE } from "../constants/constants";

const setDarkModePrefrences = () => {
  if (
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    localStorage.getItem(DARKMODE) === null
  ) {
    document.getElementById(DARKMODE).click();
  }
};
export default setDarkModePrefrences;
