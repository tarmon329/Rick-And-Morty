import useFetchMultiEpisodes from "../../../hooks/useFetchMultiEpisodes";
import createEpisodesList from "../../../utils/createEpisodesList";

import styles from "./CharacterDetail.module.scss";

const EpisodeList = ({ episodes }) => {
  const [fetchedData] = useFetchMultiEpisodes(episodes);

  if (fetchedData.length === 0) return;

  const episodeList = createEpisodesList(fetchedData);

  return (
    <section className={styles.section}>
      <h4 className="fs-4 fw-normal">Featured in:</h4>
      <div className="d-flex flex-column gap-2 mb-5">{episodeList}</div>
    </section>
  );
};

export default EpisodeList;
