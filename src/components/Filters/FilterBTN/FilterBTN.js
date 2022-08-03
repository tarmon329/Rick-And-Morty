import { useDispatch, useSelector } from "react-redux";

import styles from "./FilterBTN.module.scss";
import { resetPage } from "../../../features/pagination/paginationSlice";
import upperFirstLetter from "../../../utils/upperFirstLetter";
import { useEffect } from "react";
import toggleInputsData from "../../../utils/toggleInputsData";

const FilterBTN = ({ type, index, name }) => {
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const inp = document.querySelector(`input[id=${type}-${index}]`);
    inp.setAttribute("data-checked", inp.checked);
  }, [type, index]);

  const inputClickHandler = (e) => {
    const input = e.target;

    toggleInputsData({ input, type, name }, dispatch);

    dispatch(resetPage());
  };

  return (
    <div className="form-check">
      <input
        onClick={inputClickHandler}
        className={`${styles.input}`}
        type="radio"
        name={type}
        data-checked="false"
        id={`${type}-${index}`}
        checked={filter[type.toLowerCase()] === name}
        readOnly
      />
      <label
        className={`${styles.label} btn btn-outline-primary`}
        htmlFor={`${type}-${index}`}
      >
        {upperFirstLetter(name)}
      </label>
    </div>
  );
};

export default FilterBTN;
