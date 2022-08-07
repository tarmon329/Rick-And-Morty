import { DARKMODE } from "../constants/constants";

const setDarkModePrefrences = () => {
  if (
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    localStorage.getItem(DARKMODE) === null
  ) {
    setTimeout(() => {
      document.getElementById(DARKMODE).click();
    }, 500);
  }
};
export default setDarkModePrefrences;
