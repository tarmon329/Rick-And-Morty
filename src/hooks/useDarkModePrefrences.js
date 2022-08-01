import { useEffect } from "react";

const setDarkMode = (isDark) => {
  if (isDark === "true") {
    document.querySelector("#toggle").click();
  }
};

const useDarkModePrefrences = () => {
  useEffect(() => {
    setDarkMode(localStorage.getItem("darkMode"));
    return () => {
      setDarkMode(localStorage.getItem("darkMode"));
    };
  }, []);
  return;
};

export default useDarkModePrefrences;
