import React from "react";
import { Link } from "react-router-dom";

import useFetchFirstEpisode from "../../../hooks/useFetchFirstEpisode";
import getLocationId from "../../../utils/getLocationId";

import styles from "./CharacterCard.module.scss";

const CharacterCard = ({ characterData }) => {
  let { id, image, name, status, location, episode } = characterData;
  const { episodeName, episodeId } = useFetchFirstEpisode(episode);
  const locationId = getLocationId(location);

  return (
    <article
      className={`${styles.card} d-flex flex-column justify-content-center `}
    >
      <Link to={`/characters/${id}`}>
        <img className={`${styles.image} img-fluid`} src={image} alt={name} />
      </Link>
      <div className={`${styles.content}`}>
        <div className="fs-5 ubuntu fw-bold mb-4">{name}</div>
        <div>
          <div className="fs-6 fw-normal text-secondary">
            Last Known Location:
          </div>
          <Link
            to={`/location/${locationId}`}
            className={`${styles.link} fs-5 mb-3 ubuntu`}
          >
            {location.name}
          </Link>
          <div className="fs-6 fw-normal text-secondary">First Seen At: </div>
          <Link
            to={`/episode/${episodeId}`}
            className={`${styles.link} fs-5 ubuntu `}
          >
            {episodeName}
          </Link>
        </div>
        <Link to={`/characters/${id}`} className={styles["hidden-button"]}>
          &rarr;
        </Link>
      </div>
      <div
        className={`position-absolute badge ${styles.badge} ${styles[status]} `}
      >
        {status}
      </div>
    </article>
  );
};

export default CharacterCard;
