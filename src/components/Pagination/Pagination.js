import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ info, page, onPageChange }) => {
  if (!info) return;
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4  my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName={`${styles.btn} btn btn-primary`}
      previousClassName={`${styles.btn} btn btn-primary`}
      previousLinkClassName={`${styles.fullSize}`}
      nextLinkClassName={`${styles.fullSize}`}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={onPageChange}
      pageCount={info?.pages || 1}
      forcePage={page === 1 ? 0 : page - 1}
    />
  );
};

export default Pagination;
