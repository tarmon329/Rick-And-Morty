import fetchMultiEpisodes from "../../../api/fetchMultiEpisodes";

import useFetch from "../../../hooks/useFetch";
import createEpisodesList from "../../../utils/createEpisodesList";

import styles from "./EpisodeList.module.scss";

const EpisodeList = ({ episodes }) => {
  const fetchedEpisodes = useFetch(fetchMultiEpisodes, episodes);

  if (fetchedEpisodes.length === 0) return;

  const episodeList = createEpisodesList(fetchedEpisodes);

  return (
    <section className={styles.section}>
      <h4 className="fs-4 fw-normal">Featured in:</h4>
      <div className="d-flex flex-column gap-2 mb-5">{episodeList}</div>
    </section>
  );
};

export default EpisodeList;
