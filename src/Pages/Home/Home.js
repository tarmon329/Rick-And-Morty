import { Link } from "react-router-dom";

import createRandomNum from "../../utils/createRandomNum";

import img from "./assets/hero-main.png";
import imgMin from "./assets/hero-main-min.png";

import styles from "./Home.module.scss";

const Home = () => {
  const randomNum = createRandomNum();

  return (
    <div className={`${styles.hero} hero`}>
      <div className={styles.container}>
        <img
          srcSet={`${imgMin} 1x , ${img} 2x`}
          alt="Rick and Morty Wiki"
          className={`${styles.img} img-fluid`}
        />

        <div className={`${styles.buttons} ubuntu`}>
          <Link
            to={"characters"}
            className={`${styles.btn} ${styles["btn--primary"]} ubuntu`}
          >
            All Characters
          </Link>
          <Link
            to={`characters/${randomNum}`}
            className={`${styles.btn} ${styles["btn--card"]} btn--card ubuntu`}
          >
            Get Schwifty
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
