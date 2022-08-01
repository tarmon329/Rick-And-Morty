import { Link } from "react-router-dom";

import createRandomNum from "../../utils/createRandomNum";

import img from "./assets/hero-main.png";

import style from "./Home.module.scss";

const Home = () => {
  const randomNum = createRandomNum();

  return (
    <div className={`${style.hero} hero`}>
      <div className={style.container}>
        <img
          src={img}
          alt="Rick and Morty Wiki"
          className={`${style.img} img-fluid`}
        />

        <div className={`${style.buttons} ubuntu`}>
          <Link
            to={"characters"}
            className={`${style.btn} ${style["btn--primary"]} ubuntu`}
          >
            All Characters
          </Link>
          <Link
            to={`characters/${randomNum}`}
            className={`${style.btn} ${style["btn--card"]} btn--card ubuntu`}
          >
            Get Schwifty
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
