import React from "react";
import useFetchFirstEpisode from "../../hooks/useFetchFirstEpisode";
import styles from "./CharacterCard.module.scss";

const CharacterCard = ({ characterData }) => {
  let { image, name, status, location, episode } = characterData;
  const { episodeName } = useFetchFirstEpisode(episode);

  return (
    <React.Fragment>
      <div
        className={`${styles.card} d-flex flex-column justify-content-center`}
      >
        <img className={`${styles.image} img-fluid`} src={image} alt={name} />
        <div className={`${styles.content}`}>
          <div className="fs-5 fw-bold mb-4">{name}</div>
          <div>
            <div className="fs-6 fw-normal text-secondary">
              Last Known Location:{" "}
            </div>
            <div className="fs-5 mb-3">{location.name}</div>
            <div className="fs-6 fw-normal text-secondary">First Seen At: </div>
            <div className="fs-5 fw-bold ">{episodeName}</div>
          </div>
          <button className={styles["hidden-button"]}>&rarr;</button>
        </div>
      </div>
      <div
        className={`position-absolute badge ${styles.badge} ${styles[status]} `}
      >
        {status}
      </div>
    </React.Fragment>
  );
};

export default CharacterCard;
