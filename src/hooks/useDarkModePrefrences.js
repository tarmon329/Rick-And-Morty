import React, { useEffect } from "react";
import { DARKMODE } from "../constants/constants";
import setDarkModePrefrences from "../utils/setDarkModePrefrences";

const setDarkMode = (isDark) => {
  if (isDark === "true") {
    document.getElementById(DARKMODE).click();
  }
};

const useDarkModePrefrences = () => {
  const ref = React.createRef();

  useEffect(() => {
    setDarkMode(localStorage.getItem(DARKMODE));
    return () => {
      setDarkMode(localStorage.getItem(DARKMODE));
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      setDarkModePrefrences();
    }
  }, [ref]);

  return ref;
};

export default useDarkModePrefrences;
