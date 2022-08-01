import { useDispatch } from "react-redux";

import styles from "./FilterBTN.module.scss";
import { setFilter } from "../../../features/filter/filterSlice";
import { resetPage } from "../../../features/pagination/paginationSlice";

const FilterBTN = ({ type, index, name }) => {
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
      />
      <label
        className={`${styles.label} btn btn-outline-primary`}
        htmlFor={`${type}-${index}`}
      >
        {name}
      </label>
    </div>
  );
};

export default FilterBTN;
