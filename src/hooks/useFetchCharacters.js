import { useState, useCallback } from "react";
import fetchPageData from "../api/fetchPageData";

const useFetchCharacters = () => {
  const [isLoader, setIsLoader] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  const getPageData = useCallback(
    async (queryOptions) => {
      setIsLoader(true);
      const data = await fetchPageData("character", queryOptions);
      setIsLoader(false);
      setFetchedData(data);
    },
    [setFetchedData]
  );

  return [fetchedData, getPageData, isLoader];
};

export default useFetchCharacters;
