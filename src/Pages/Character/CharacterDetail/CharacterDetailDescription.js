import React from "react";

import decideIcon from "../../../utils/decideIcon";
import upperFirstLetter from "../../../utils/upperFirstLetter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";

import styles from "./CharacterDetail.module.scss";

const CharacterDetailDescription = ({ gender, species, type }) => {
  return (
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
        <FontAwesomeIcon icon={decideIcon(species)} className={styles.icon} />{" "}
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
  );
};

export default CharacterDetailDescription;
