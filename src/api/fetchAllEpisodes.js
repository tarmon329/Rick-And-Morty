import { EPISODELOWER } from "../constants/constants";
import fetchLength from "./fetchLength";
import fetchPageData from "./fetchPageData";

const fetchAllEpisodes = async () => {
  const episodeLength = await fetchLength(EPISODELOWER);
  const allEpisodesId = Array.from({ length: episodeLength }, (_, i) => i + 1);
  const data = await fetchPageData(EPISODELOWER, allEpisodesId);
  return data;
};

export default fetchAllEpisodes;
