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
    <article className={`${styles.card} d-flex flex-column `}>
      <Link to={`/characters/${id}`}>
        <img className={`${styles.image} img-fluid`} src={image} alt={name} />
      </Link>
      <div className={`${styles.content}`}>
        <div className={`${styles.name} ubuntu fw-bold`}>{name}</div>
        <div className={styles.content__inner}>
          <div>
            <h4 className="fs-6 fw-normal text-secondary">
              Last Known Location:
            </h4>
            <Link
              to={`/location/${locationId}`}
              className={`${styles.link} fs-5 ubuntu`}
            >
              {location.name}
            </Link>
          </div>
          <div>
            <h4 className="fs-6 fw-normal text-secondary">First Seen At: </h4>
            <Link
              to={`/episode/${episodeId}`}
              className={`${styles.link} fs-5 ubuntu `}
            >
              {episodeName}
            </Link>
          </div>
        </div>
      </div>
      <Link to={`/characters/${id}`} className={styles["hidden-button"]}>
        &rarr;
      </Link>
      <div
        className={`position-absolute badge ${styles.badge} ${styles[status]} `}
      >
        {status}
      </div>
    </article>
  );
};

export default CharacterCard;
