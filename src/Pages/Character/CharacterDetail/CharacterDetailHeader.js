import styles from "./CharacterDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import decideIcon from "../../../utils/decideIcon";
import upperFirstLetter from "../../../utils/upperFirstLetter";

const CharacterDetailHeader = ({ image, name, status }) => {
  return (
    <section className={`${styles.section}`}>
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
  );
};

export default CharacterDetailHeader;
