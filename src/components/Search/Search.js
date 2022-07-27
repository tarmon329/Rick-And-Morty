import { useRef } from "react";
import styles from "./Search.module.scss";

let inputTimer = null;

const Search = ({ onSearch, setName }) => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e?.preventDefault();
    clearTimeout(inputTimer);
    onSearch(inputRef.current.value);
  };
  const inputChangeHandler = (e) => {
    clearTimeout(inputTimer);
    inputTimer = setTimeout(() => {
      setName(inputRef.current.value);
      submitHandler();
    }, 500);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="d-flex justify-content-center mb-5"
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
