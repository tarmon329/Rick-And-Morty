import NoCharacters from "../../components/NoCharacters/NoCharacters";
import CharacterDetail from "./CharacterDetail/CharacterDetail";
import Loader from "../../components/UI/Loader/Loader";

import useFetchByParams from "../../hooks/useFetchByParams";
import useNavigateBack from "../../hooks/useNavigateBack";

import createRandomNum from "../../utils/createRandomNum";

import styles from "./Character.module.scss";
import { Link } from "react-router-dom";

const Character = () => {
  const [fetchedData, isLoader] = useFetchByParams("character");
  const navigateBack = useNavigateBack();
  const randomNum = createRandomNum();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className={`${styles.return} col-lg-3 col-12`}>
            <button
              onClick={navigateBack}
              type="submit"
              className={`${styles.btn}  btn btn-primary fs-5 mb-4`}
            >
              Return
            </button>
          </div>
          <div className="col-lg-6 col-12 mb-4">
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
          <div className={`${styles.random} col-lg-3 col-12`}>
            <Link
              to={`/characters/${randomNum}`}
              className={`${styles.btn} btn btn-primary fs-5`}
            >
              Get Schwifty
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
