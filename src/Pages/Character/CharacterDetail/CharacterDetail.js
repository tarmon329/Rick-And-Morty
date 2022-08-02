import { Link } from "react-router-dom";

import createIdArr from "../../../utils/createIdArr";
import getLocationId from "../../../utils/getLocationId";
import upperFirstLetter from "../../../utils/upperFirstLetter";

import styles from "./CharacterDetail.module.scss";
import EpisodeList from "../EpisodeList";

const CharacterDetail = ({ characterData }) => {
  let {
    image,
    name,
    status,
    location,
    episode: episodes,
    gender,
    species,
    type,
  } = characterData;

  const locationId = getLocationId(location);

  return (
    <article
      className={`${styles.card} container d-flex justify-content-center`}
    >
      <div className="d-flex flex-column gap-3">
        <img className={`${styles.image} img-fluid`} src={image} alt={name} />
        <div className={`${styles.content}`}>
          <section className={styles.section}>
            <h1 className={`${styles.name} ubuntu fw-bold text-center mb-4`}>
              {name}
            </h1>
            <h2 className={styles["status__name"]}>
              <span
                className={`${styles.status} ${styles[`status--${status}`]}`}
              ></span>
              {upperFirstLetter(status)}
            </h2>
            <h3 className="fs-4 fw-normal">
              Gender:{" "}
              <span className={`${styles.value} fw-bold`}>{gender}</span>
            </h3>
            <h3 className="fs-4 fw-normal">
              Species:{" "}
              <span className={`${styles.value} fw-bold`}>{species}</span>
            </h3>
            <h3 className="fs-4 fw-normal">
              Type:{" "}
              <span className={`${styles.value} fw-bold`}>
                {type || "Unknown"}
              </span>
            </h3>
          </section>

          <section className={styles.section}>
            <div className={styles["link-container"]}>
              <h4 className="fs-4 fw-normal">Last Known Location:</h4>
              <Link
                to={`/location/${locationId}`}
                className={`${styles.link} fs-5 mb-3 fw-bold ubuntu`}
              >
                {location.name}
              </Link>
            </div>
          </section>
        </div>
        <section>
          <h4 className="fs-4 fw-normal">Featured in:</h4>
          <EpisodeList episodes={createIdArr("episodes", episodes)} />
        </section>
      </div>
    </article>
  );
};

export default CharacterDetail;
