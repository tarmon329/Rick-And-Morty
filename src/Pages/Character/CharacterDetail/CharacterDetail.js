import createIdArr from "../../../utils/createIdArr";
import getLocationId from "../../../utils/getLocationId";

import styles from "./CharacterDetail.module.scss";

import EpisodeList from "../EpisodeList/EpisodesList";

import CharacterDetailHeader from "./CharacterDetailHeader";
import CharacterDetailDescription from "./CharacterDetailDescription";
import CharacterDetailLocation from "./CharacterDetailLocation";

import { EPISODESLOWER } from "../../../constants/constants";

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
        <CharacterDetailHeader image={image} name={name} status={status} />
        <CharacterDetailDescription
          gender={gender}
          species={species}
          type={type}
        />
        <CharacterDetailLocation location={location} locationId={locationId} />
      </section>
      <EpisodeList episodes={createIdArr(EPISODESLOWER, episodes)} />
    </article>
  );
};

export default CharacterDetail;
