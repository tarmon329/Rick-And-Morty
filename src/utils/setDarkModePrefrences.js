const setDarkModePrefrences = () => {
  if (
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    localStorage.getItem("darkMode") === null
  ) {
    setTimeout(() => {
      document.getElementById("toggle").click();
    }, 500);
  }
};
export default setDarkModePrefrences;
