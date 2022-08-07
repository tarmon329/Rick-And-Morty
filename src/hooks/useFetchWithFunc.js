import { useEffect, useState } from "react";

const useFetchWithFunc = (fc) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fc();
      if (data.error) {
        setFetchedData({ error: data.error });
      } else {
        setFetchedData(data);
      }
    })();
  }, [fc]);

  return fetchedData;
};

export default useFetchWithFunc;
