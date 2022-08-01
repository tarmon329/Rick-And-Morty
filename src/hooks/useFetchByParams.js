import { useState, useEffect } from "react";
import fetchPageData from "../api/fetchPageData";
import { useParams } from "react-router-dom";

const useFetchByParams = (type) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (isNaN(+id) === true) {
        setIsLoader(false);
        return setFetchedData({ error: new Error("Invalid URL") });
      }
      setIsLoader(true);
      const data = await fetchPageData(type, +id);
      setFetchedData(data);
      setIsLoader(false);
    })();
  }, [type, id]);

  return [fetchedData, isLoader];
};

export default useFetchByParams;
