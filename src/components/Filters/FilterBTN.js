import React from "react";

const FilterBTN = () => {
  return (
    <React.Fragment>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          //   checked
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
    </React.Fragment>
  );
};

export default FilterBTN;
