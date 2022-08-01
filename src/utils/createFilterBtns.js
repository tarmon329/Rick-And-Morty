import FilterBTN from "../components/Filters/FilterBTN/FilterBTN";

const createFilterBtns = (arr, type) => {
  return arr.map((name, index) => (
    <FilterBTN key={index} type={type} index={index} name={name} />
  ));
};

export default createFilterBtns;
