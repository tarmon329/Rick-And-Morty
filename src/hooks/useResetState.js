import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../features/filter/filterSlice";
import { resetPage } from "../features/pagination/paginationSlice";

const useResetState = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFilters());
    dispatch(resetPage());
  }, [dispatch]);
};
export default useResetState;
