import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { changePage } from "../../../features/pagination/paginationSlice";
import useResize from "../../../hooks/useResize";

import styles from "./Pagination.module.scss";

const Pagination = ({ info, page }) => {
  const dispatch = useDispatch();
  const width = useResize();

  const pageChangeHandler = (data) => {
    dispatch(changePage(data.selected + 1));
  };

  if (!info) return;

  return (
    <ReactPaginate
      className={`${styles.pagination} pagination justify-content-center align-items-center my-4`}
      previousLabel="&lsaquo;"
      breakClassName={styles.break}
      nextLabel="&rsaquo;"
      nextClassName={`${styles.btn} btn btn-primary`}
      previousClassName={`${styles.btn} btn btn-primary`}
      previousLinkClassName={`${styles.fullSize}`}
      nextLinkClassName={`${styles.fullSize}`}
      pageClassName="page-item"
      pageLinkClassName={`${styles["page-link"]} page-link`}
      activeClassName="active"
      onPageChange={pageChangeHandler}
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      pageCount={info?.pages || 1}
      forcePage={page === 1 ? 0 : page - 1}
    />
  );
};

export default Pagination;
