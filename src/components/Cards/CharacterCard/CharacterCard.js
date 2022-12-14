import React from "react";
import { Link } from "react-router-dom";

import fetchFirstEpisode from "../../../api/fetchFirstEpisode";
import useFetch from "../../../hooks/useFetch";
import { resetYOffset } from "../../../hooks/useScrollCache";
import getLocationId from "../../../utils/getLocationId";
import upperFirstLetter from "../../../utils/upperFirstLetter";

import styles from "./CharacterCard.module.scss";

const CharacterCard = ({ characterData }) => {
  let { id, image, name, status, location, episode: episodes } = characterData;
  const { name: episodeName, id: episodeId } = useFetch(
    fetchFirstEpisode,
    episodes[0],
    {
      episodeName: null,
      episodeId: null,
    }
  );
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
            <h4 className="fs-6 fw-normal text-secondary">First Seen At: </h4>
            <Link
              onClick={resetYOffset}
              to={`/episode/${episodeId}`}
              className={`${styles.link} fs-5 ubuntu `}
            >
              {episodeName}
            </Link>
          </div>
          <div>
            <h4 className="fs-6 fw-normal text-secondary">
              Last Known Location:
            </h4>
            <Link
              onClick={resetYOffset}
              to={`/location/${locationId}`}
              className={`${styles.link} fs-5 ubuntu`}
            >
              {upperFirstLetter(location.name)}
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
        {upperFirstLetter(status)}
      </div>
    </article>
  );
};

export default CharacterCard;
