import useFetchMultiEpisodes from "../../../hooks/useFetchMultiEpisodes";
import createEpisodesList from "../../../utils/createEpisodesList";

const EpisodeList = ({ episodes }) => {
  const [fetchedData] = useFetchMultiEpisodes(episodes);

  if (fetchedData.length === 0) return;

  const episodeList = createEpisodesList(fetchedData);
  return <div className="d-flex flex-column gap-2 mb-5">{episodeList}</div>;
};

export default EpisodeList;
