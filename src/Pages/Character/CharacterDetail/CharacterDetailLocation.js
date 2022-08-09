import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import upperFirstLetter from "../../../utils/upperFirstLetter";

import styles from "./CharacterDetail.module.scss";
import { resetYOffset } from "../../../hooks/useScrollCache";

const CharacterDetailLocation = ({ location, locationId }) => {
  return (
    <section className={styles.section}>
      <div className={styles["link-container"]}>
        <h4 className="fs-4 fw-normal mb-3">Last Known Location:</h4>

        <Link
          onClick={resetYOffset}
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
  );
};

export default CharacterDetailLocation;
