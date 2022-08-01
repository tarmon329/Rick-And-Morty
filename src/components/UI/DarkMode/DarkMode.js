import useDarkModePrefrences from "../../../hooks/useDarkModePrefrences";
import styles from "./DarkMode.module.scss";

const changeDarkMode = () => {
  document.documentElement.classList.toggle("darkMode");
  localStorage.setItem(
    "darkMode",
    document.documentElement.classList.contains("darkMode")
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
