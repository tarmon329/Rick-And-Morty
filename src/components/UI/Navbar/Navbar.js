import { NavLink } from "react-router-dom";

import style from "./Navbar.module.scss";

const Navbar = () => {
  const toggleHandler = (e) => {
    const btn = e.target.closest("button");
    btn.classList.toggle(style.active);
  };

  const closeHandler = () => {
    const toggler = document.querySelector(".navbar-toggler");
    if (
      window.innerWidth < 1000 &&
      toggler &&
      toggler.classList.contains(style.active)
    ) {
      setTimeout(() => {
        toggler.click();
      }, 100);
    }
  };

  return (
    <nav className={`${style.navbar} navbar navbar-expand-lg mb-4`}>
      <div className="container">
        <NavLink to="/" className={`${style.logo} nav-logo`}>
          <h1 onClick={closeHandler} className="fs-3 ubuntu navbar-brand">
            Rick & Morty <span className="text-primary">WiKi</span>
          </h1>
        </NavLink>
        <button
          className={`${style.toggler} navbar-toggler`}
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
            <li onClick={closeHandler} className="nav-item">
              <NavLink to="/characters" className={`${style.link} nav-link`}>
                Characters
              </NavLink>
            </li>
            <li onClick={closeHandler} className="nav-item">
              <NavLink to="/episode" className={`${style.link} nav-link`}>
                Episode
              </NavLink>
            </li>
            <li onClick={closeHandler} className="nav-item">
              <NavLink to="/location" className={`${style.link} nav-link`}>
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
