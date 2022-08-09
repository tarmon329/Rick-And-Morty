import { Link } from "react-router-dom";
import { resetYOffset } from "../../hooks/useScrollCache";

import styles from "./EpisodeDetails.module.scss";

const EpisodeDetails = ({ episode }) => {
  return (
    <div className={styles.episode}>
      <Link
        onClick={resetYOffset}
        className={styles["episode__name"]}
        to={`/episode/${episode.id}`}
      >
        {episode.episode} - {episode.name}
      </Link>
      <span className={styles["episode__date"]}>{episode.air_date}</span>
    </div>
  );
};
export default EpisodeDetails;
