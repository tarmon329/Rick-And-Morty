import { Link } from "react-router-dom";

import createIdArr from "../../../utils/createIdArr";
import getLocationId from "../../../utils/getLocationId";
import upperFirstLetter from "../../../utils/upperFirstLetter";

import styles from "./CharacterDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUserGear } from "@fortawesome/free-solid-svg-icons";
import decideIcon from "../../../utils/decideIcon";

import EpisodeList from "../EpisodesList/EpisodesList";

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
    <article className={`${styles.article}`}>
      <section className={`${styles.section} ${styles["section--left"]}`}>
        <section className={`${styles.section} ${styles["section--header"]}`}>
          <img className={`${styles.image} img-fluid`} src={image} alt={name} />
          <h1 className={`${styles.name} ubuntu fw-bold text-center mb-4`}>
            {name}
          </h1>
          <h2 className={styles["status__name"]}>
            <FontAwesomeIcon
              icon={decideIcon(status)}
              className={`${styles.icon} ${styles[`icon--${status}`]}`}
              beatFade
            />
            {" - "}
            {upperFirstLetter(status)}
          </h2>
        </section>
        <section className={`${styles.section} gap-3`}>
          <h3 className="fs-4 fw-normal">
            Gender:{" "}
            <FontAwesomeIcon
              icon={decideIcon(gender)}
              className={`${styles.icon} ${styles[`icon--${gender}`]}`}
            />
            <span className={`${styles.value} fw-bold`}>
              {upperFirstLetter(gender)}
            </span>
          </h3>
          <h3 className="fs-4 fw-normal">
            Species:{" "}
            <FontAwesomeIcon
              icon={decideIcon(species)}
              className={styles.icon}
            />{" "}
            <span className={`${styles.value} fw-bold`}>
              {upperFirstLetter(species)}
            </span>
          </h3>
          <h3 className="fs-4 fw-normal">
            Type:{" "}
            <FontAwesomeIcon
              icon={type ? faUserGear : decideIcon(type)}
              className={styles.icon}
            />
            <span className={`${styles.value} fw-bold`}>
              {upperFirstLetter(type) || "Unknown"}
            </span>
          </h3>
        </section>

        <section className={styles.section}>
          <div className={styles["link-container"]}>
            <h4 className="fs-4 fw-normal mb-3">Last Known Location:</h4>

            <Link
              to={`/location/${locationId}`}
              className={`${styles.link} fs-5 mb-3 fw-bold ubuntu`}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className={`${styles.icon} ${styles[`icon--location`]}`}
              />{" "}
              {upperFirstLetter(location.name)}
            </Link>
          </div>
        </section>
      </section>

      <section className={styles.section}>
        <h4 className="fs-4 fw-normal">Featured in:</h4>
        <EpisodeList episodes={createIdArr("episodes", episodes)} />
      </section>
    </article>
  );
};

export default CharacterDetail;
