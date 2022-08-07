import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { resetYOffset } from "../../../hooks/useScrollCache";

import NavBarLink from "./NavBarLink/NavBarLink";

import {
  CHARACTERSLOWER,
  EPISODELOWER,
  LOCATIONLOWER,
} from "../../../constants/constants";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const toggleHandler = (e) => {
    const btn = e.target.closest("button");
    btn.classList.toggle(styles.active);
  };

  useEffect(() => {
    const toggler = document.querySelector(".navbar-toggler");

    const togglerCloseHandler = (e) => {
      const el = e.target.closest(".navbar-toggler");
      if (
        window.innerWidth < 1000 &&
        toggler?.classList.contains(styles.active) &&
        el !== toggler
      ) {
        setTimeout(() => {
          toggler.click();
        }, 100);
      }
    };

    document.documentElement.addEventListener("click", togglerCloseHandler);

    return () => {
      document.documentElement.removeEventListener(
        "click",
        togglerCloseHandler
      );
    };
  }, []);

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container">
        <NavLink to="/" className={`${styles.logo} nav-logo`}>
          <h1 onClick={resetYOffset} className="fs-3 ubuntu navbar-brand">
            Rick & Morty <span className="text-primary">WiKi</span>
          </h1>
        </NavLink>
        <button
          className={`${styles.toggler} navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 200 200"
          >
            <g strokeWidth="6.5" strokeLinecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#bfde42"
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="#bfde42"
              />
              <path
                d="M72 125.143h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#bfde42"
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="#bfde42"
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#bfde42"
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#009100"
                fillRule="evenodd"
                stroke="#bfde42"
              />
            </g>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <NavBarLink type={CHARACTERSLOWER} />
            <NavBarLink type={EPISODELOWER} />
            <NavBarLink type={LOCATIONLOWER} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
