import { useState, useEffect, useCallback } from "react";
import fetchPageData from "../api/fetchPageData";

const useFetchMultiEpisodes = (idArray) => {
  const [fetchedData, setFetchedData] = useState([]);

  const fetchMultiEp = useCallback(
    async (idArr = idArray) => {
      const data = await fetchPageData("episode", idArr);
      if (Array.isArray(data)) {
        setFetchedData(data);
      } else {
        setFetchedData([data]);
      }
    },
    [idArray]
  );

  useEffect(() => {
    fetchMultiEp();
  }, [fetchMultiEp]);

  return [fetchedData];
};

export default useFetchMultiEpisodes;
