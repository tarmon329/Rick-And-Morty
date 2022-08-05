import fetchByURL from "./fetchByURL";

const fetchFirstEpisode = async (episodeURL) => {
  return await fetchByURL(episodeURL);
};

export default fetchFirstEpisode;
