import createFilterBtns from "../../../utils/createFilterBtns";

import styles from "./Category.module.scss";

const Category = ({ type, options }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${type}`}>
        <button
          className={`${styles.btn} accordion-button collapsed`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${type}`}
          aria-expanded="false"
          aria-controls={`collapse${type}`}
        >
          {type}
        </button>
      </h2>
      <div
        id={`collapse${type}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${type}`}
        data-bs-parent="#accordion"
      >
        <div className={`${styles.body} accordion-body`}>
          {createFilterBtns(options, type)}
        </div>
      </div>
    </div>
  );
};

export default Category;
