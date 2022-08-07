import { Link } from "react-router-dom";

import NoCharacters from "../../components/NoCharacters/NoCharacters";
import CharacterDetail from "./CharacterDetail/CharacterDetail";
import Loader from "../../components/UI/Loader/Loader";

import useFetchByParams from "../../hooks/useFetchByParams";
import useNavigateBack from "../../hooks/useNavigateBack";

import createRandomNum from "../../utils/createRandomNum";
import useScrollToTop from "../../utils/scrollToTop";

import styles from "./Character.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faDice } from "@fortawesome/free-solid-svg-icons";

import { CHARACTERLOWER } from "../../constants/constants";

const Character = () => {
  const [fetchedData, isLoader] = useFetchByParams(CHARACTERLOWER);
  const navigateBack = useNavigateBack();
  const randomNum = createRandomNum();
  useScrollToTop();

  return (
    <div className="container">
      <div className="row pt-4">
        <div className={`${styles.buttons} col-lg-3 col-12`}>
          <button onClick={navigateBack} type="button" className={styles.btn}>
            <FontAwesomeIcon className={styles.icon} icon={faAnglesLeft} />
            Return
          </button>
          <Link to={`/characters/${randomNum}`} className={styles.btn}>
            <FontAwesomeIcon className={styles.icon} icon={faDice} />
            Get Schwifty
          </Link>
        </div>
        <div className="col-lg-9 col-12 position-relative">
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
  );
};

export default Character;
