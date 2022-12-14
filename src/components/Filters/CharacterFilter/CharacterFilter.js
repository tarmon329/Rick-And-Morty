import { useDispatch } from "react-redux";
import { resetFilters } from "../../../features/filter/filterSlice";
import { resetPage } from "../../../features/pagination/paginationSlice";

import Category from "../Category/Category";

import styles from "./CharacterFilter.module.scss";
import {
  GENDER,
  SPECIES,
  STATUS,
  FILTEROPTIONS,
} from "../../../constants/constants";

const CharacterFilter = () => {
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(resetFilters());
    dispatch(resetPage());
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        onClick={clearHandler}
        className={`${styles.clear} text-center text-primary text-decoration-underline mb-4`}
      >
        Clear Filters
      </div>

      <div className={`${styles.accordion} accordion`} id="accordion">
        <Category type={STATUS} options={FILTEROPTIONS.STATUS} />
        <Category type={SPECIES} options={FILTEROPTIONS.SPECIES} />
        <Category type={GENDER} options={FILTEROPTIONS.GENDER} />
      </div>
    </div>
  );
};

export default CharacterFilter;
