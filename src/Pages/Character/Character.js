import { Link } from "react-router-dom";

import NoCharacters from "../../components/NoCharacters/NoCharacters";
import CharacterDetail from "./CharacterDetail/CharacterDetail";
import Loader from "../../components/UI/Loader/Loader";

import useFetchByParams from "../../hooks/useFetchByParams";
import useNavigateBack from "../../hooks/useNavigateBack";

import createRandomNum from "../../utils/createRandomNum";

import styles from "./Character.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faDice } from "@fortawesome/free-solid-svg-icons";

const Character = () => {
  const [fetchedData, isLoader] = useFetchByParams("character");
  const navigateBack = useNavigateBack();
  const randomNum = createRandomNum();

  return (
    <div className="container">
      <div className="row">
        <div className={`${styles.buttons} col-lg-3 col-12`}>
          <button onClick={navigateBack} type="submit" className={styles.btn}>
            <FontAwesomeIcon className={styles.icon} icon={faAnglesLeft} />
            Return
          </button>
          <Link to={`/characters/${randomNum}`} className={styles.btn}>
            <FontAwesomeIcon className={styles.icon} icon={faDice} />
            Get Schwifty
          </Link>
        </div>
        <div className="col-lg-8 col-12 mb-4">
          <div className="position-relative">
            {isLoader && <Loader />}
            {!isLoader && fetchedData.error && (
              <NoCharacters error={fetchedData.error} />
            )}
            {!isLoader && !fetchedData.error && (
              <CharacterDetail characterData={fetchedData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
