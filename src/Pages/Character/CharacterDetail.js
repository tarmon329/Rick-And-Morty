import { Link } from "react-router-dom";
import useFetchFirstEpisode from "../../hooks/useFetchFirstEpisode";
import getLocationId from "../../utils/getLocationId";

import styles from "./CharacterDetail.module.scss";

const CharacterDetail = ({ characterData }) => {
  let { image, name, status, location, episode, gender, species, type } =
    characterData;
  const { episodeName, episodeId } = useFetchFirstEpisode(episode);
  const locationId = getLocationId(location);

  return (
    <article
      className={`${styles.card} container d-flex justify-content-center`}
    >
      <div className="d-flex flex-column gap-3">
        <h1 className={`${styles.name} fs-2 ubuntu fw-bold text-center mb-4`}>
          {name}
        </h1>
        <img className={`${styles.image} img-fluid`} src={image} alt={name} />
        <div className={`${styles.content}`}>
          <section className={styles.section}>
            <h3 className={styles["status__name"]}>
              <span
                className={`${styles.status} ${styles[`status--${status}`]}`}
              ></span>
              {status}
            </h3>
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
            <div className={styles["link-container"]}>
              <h4 className="fs-4 fw-normal">First Seen At: </h4>
              <Link
                to={`/episode/${episodeId}`}
                className={`${styles.link} fs-5 fw-bold ubuntu `}
              >
                {episodeName}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default CharacterDetail;
