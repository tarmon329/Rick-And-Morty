import EpisodeDetails from "../components/EpisodeDetails/EpisodeDetails";

const createEpisodesList = (episodesArr) => {
  return episodesArr.map((episode) => {
    return <EpisodeDetails key={episode.id} episode={episode} />;
  });
};

export default createEpisodesList;
