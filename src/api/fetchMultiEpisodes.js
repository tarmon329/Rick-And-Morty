import fetchPageData from "./fetchPageData";

const fetchMultiEpisodes = async (idArr) => {
  const data = await fetchPageData("episode", idArr);
  if (Array.isArray(data)) {
    return data;
  }
  return [data];
};

export default fetchMultiEpisodes;
