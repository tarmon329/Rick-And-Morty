import { useNavigate } from "react-router-dom";

import createOptionsMarkup from "../../../utils/createOptionsMarkup";

import { EPISODE, LOCATION } from "../../../constants/constants";

import styles from "./DropdownFilter.module.scss";

const DropdownFilter = ({ type, options }) => {
  const navigate = useNavigate();
  const changeHandler = (e) => {
    navigate(`/${type.toLowerCase()}/${e.target.value}`);
  };

  let optionsMarkup = "";
  if (type === LOCATION) {
    optionsMarkup = options?.error ? (
      <option value="1">Error: {options.error}</option>
    ) : (
      createOptionsMarkup(options)
    );
  }
  if (type === EPISODE) {
    optionsMarkup = options;
  }
  return (
    <div className={`${styles.container} col-lg-3 col-12 mb-4`}>
      <h4 className="text-center mb-4">Pick {type}</h4>
      <div className="input-group mb-3">
        <select onChange={changeHandler} className="form-select">
          <option value="1">Choose...</option>
          {optionsMarkup}
        </select>
      </div>
    </div>
  );
};

export default DropdownFilter;
