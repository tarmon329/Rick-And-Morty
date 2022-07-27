import styles from "./DarkMode.module.scss";

const changeDarkMode = () => {
  document.documentElement.classList.toggle("darkMode");
};

const DarkMode = () => {
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
