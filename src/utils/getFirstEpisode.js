import fetchByURL from "../api/fetchByURL";

const getFirstEpisode = async (episodeURL) => {
  return await fetchByURL(episodeURL);
};

export default getFirstEpisode;
