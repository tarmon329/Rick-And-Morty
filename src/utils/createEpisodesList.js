import EpisodeDetails from "../components/EpisodeDetails/EpisodeDetails";

const createEpisodesList = (episodesArr) => {
  const episodeList = episodesArr.map((episode) => {
    return <EpisodeDetails key={episode.id} episode={episode} />;
  });

  return episodeList;
};

export default createEpisodesList;
