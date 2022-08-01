import { useState, useCallback } from "react";
import fetchPageData from "../api/fetchPageData";

const useFetchMultiCharacters = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const getPageData = useCallback(
    async (idArr) => {
      const data = await fetchPageData("character", idArr);
      if (Array.isArray(data)) {
        setFetchedData(data);
      } else {
        setFetchedData([data]);
      }
    },
    [setFetchedData]
  );
  return [fetchedData, getPageData];
};

export default useFetchMultiCharacters;
