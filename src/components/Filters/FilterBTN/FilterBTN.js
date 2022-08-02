import { useDispatch, useSelector } from "react-redux";

import styles from "./FilterBTN.module.scss";
import { setFilter } from "../../../features/filter/filterSlice";
import { resetPage } from "../../../features/pagination/paginationSlice";
import upperFirstLetter from "../../../utils/upperFirstLetter";

const FilterBTN = ({ type, index, name }) => {
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const inputClickHandler = () => {
    dispatch(resetPage());
    dispatch(setFilter({ type: type.toLocaleLowerCase(), value: name }));
  };

  return (
    <div className="form-check">
      <input
        onClick={inputClickHandler}
        className={`${styles.input}`}
        type="radio"
        name={type}
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
