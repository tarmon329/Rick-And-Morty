import { useState, useCallback } from "react";
import fetchPageData from "../api/fetchPageData";

const useFetchCharacters = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const getPageData = useCallback(
    async (queryOptions) => {
      const data = await fetchPageData("character", queryOptions);

      setFetchedData(data);
    },
    [setFetchedData]
  );

  return [fetchedData, getPageData];
};

export default useFetchCharacters;
