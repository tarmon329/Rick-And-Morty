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
      className={`${styles.card} container  d-flex justify-content-center`}
    >
      <div className="d-flex flex-column gap-3">
        <h1 className={`${styles.name} fs-2 ubuntu fw-bold text-center mb-4`}>
          {name}
        </h1>
        <img className={`${styles.image} img-fluid`} src={image} alt={name} />
        <div className={`${styles.content}`}>
          <h3 className="fs-6 fw-normal text-secondary">
            Status:
            {status}
          </h3>
          <h3 className="fs-6 fw-normal text-secondary">
            Gender: <span className={`${name} fw-bold`}>{gender}</span>
          </h3>
          <h3 className="fs-6 fw-normal text-secondary">Species: {species}</h3>
          <h3 className="fs-6 fw-normal text-secondary">Type: {type}</h3>

          <div className="fs-6 fw-normal text-secondary">
            Last Known Location:
          </div>
          <Link
            to={`/location/${locationId}`}
            className={`${styles.link} fs-5 mb-3 fw-bold ubuntu`}
          >
            {location.name}
          </Link>
          <div className="fs-6 fw-normal text-secondary">First Seen At: </div>
          <Link
            to={`/episode/${episodeId}`}
            className={`${styles.link} fs-5 fw-bold ubuntu `}
          >
            {episodeName}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CharacterDetail;
