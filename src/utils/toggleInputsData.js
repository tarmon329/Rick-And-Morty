import { setFilter } from "../features/filter/filterSlice";

const toggleInputsData = ({ input, type, name }, dispatch) => {
  const inputsArr = document.querySelectorAll("input[data-checked]");
  if (input.getAttribute("data-checked") === "true") {
    inputsArr.forEach((inp) => {
      if (inp === input) {
        dispatch(setFilter({ type: type.toLocaleLowerCase(), value: "" }));
      }
      inp.setAttribute("data-checked", "false");
    });
  } else {
    input.setAttribute("data-checked", "true");
    inputsArr.forEach((inp) => {
      if (inp === input) {
        dispatch(setFilter({ type: type.toLocaleLowerCase(), value: "" }));
      } else {
        inp.setAttribute("data-checked", "false");
      }
    });
    dispatch(setFilter({ type: type.toLocaleLowerCase(), value: name }));
  }
};

export default toggleInputsData;
