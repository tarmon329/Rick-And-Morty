import { useEffect, useState } from "react";

const useFetch = (fc, args, initialState = []) => {
  const [fetchedData, setFetchedData] = useState(initialState);
  useEffect(() => {
    (async () => {
      const data = await fc(args);
      if (data.error) {
        setFetchedData({ error: data.error });
      } else {
        setFetchedData(data);
      }
    })();
  }, [fc, args]);

  return fetchedData;
};

export default useFetch;
