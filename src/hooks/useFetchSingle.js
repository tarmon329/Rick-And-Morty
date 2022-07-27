import { useState, useCallback } from "react";
import fetchPageData from "../api/fetchPageData";

const useFetchSingle = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const getPageData = useCallback(
    async (type, id) => {
      const data = await fetchPageData(type, id);

      setFetchedData(data);
    },
    [setFetchedData]
  );

  return [fetchedData, getPageData];
};

export default useFetchSingle;
