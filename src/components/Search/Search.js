import { useEffect, useRef } from "react";

import { setName } from "../../features/filter/filterSlice";
import { resetPage } from "../../features/pagination/paginationSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Search.module.scss";

let inputTimer = null;

const Search = () => {
  const { filter } = useSelector((state) => state);
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const ref = inputRef.current;
    ref.value = filter.name;
  }, [filter]);

  const submitHandler = (e) => {
    e?.preventDefault();
    clearTimeout(inputTimer);
    dispatch(resetPage());
    dispatch(setName(inputRef.current.value.trim()));
  };
  const inputChangeHandler = () => {
    clearTimeout(inputTimer);
    inputTimer = setTimeout(() => {
      submitHandler();
    }, 500);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${styles.form} d-flex justify-content-center mb-5`}
    >
      <input
        ref={inputRef}
        onChange={inputChangeHandler}
        placeholder="Search for character"
        type="text"
        className={styles.input}
      />
      <button type="submit" className={`${styles.btn} btn btn-primary fs-5`}>
        Search
      </button>
    </form>
  );
};

export default Search;
