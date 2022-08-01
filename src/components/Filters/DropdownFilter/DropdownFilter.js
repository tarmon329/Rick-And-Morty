import { useNavigate } from "react-router-dom";
import styles from "./DropdownFilter.module.scss";

const DropdownFilter = ({ type, options }) => {
  const navigate = useNavigate();
  const changeHandler = (e) => {
    navigate(`/${type.toLowerCase()}/${e.target.value}`);
  };
  return (
    <div className={`${styles.container} col-lg-3 col-12 mb-4`}>
      <h4 className="text-center mb-4">Pick {type}</h4>
      <div className="input-group mb-3">
        <select onChange={changeHandler} className="form-select" id="Location">
          <option value="1">Choose...</option>
          {options}
        </select>
      </div>
    </div>
  );
};

export default DropdownFilter;
