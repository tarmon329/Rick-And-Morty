import { DARKMODE } from "../../../constants/constants";
import useDarkModePrefrences from "../../../hooks/useDarkModePrefrences";
import styles from "./DarkMode.module.scss";

const changeDarkMode = () => {
  document.documentElement.classList.toggle(DARKMODE);
  localStorage.setItem(
    DARKMODE,
    document.documentElement.classList.contains(DARKMODE)
  );
};

const DarkMode = () => {
  useDarkModePrefrences();

  return (
    <input
      id="toggle"
      className={styles.toggle}
      type="checkbox"
      onClick={changeDarkMode}
    />
  );
};

export default DarkMode;
