import { resetYOffset } from "../../../../hooks/useScrollCache";
import { NavLink } from "react-router-dom";

import upperFirstLetter from "../../../../utils/upperFirstLetter";

import styles from "./NavBarLink.module.scss";

const NavBarLink = ({ type }) => {
  return (
    <li onClick={resetYOffset} className="nav-item">
      <NavLink to={`/${type}`} className={`${styles.link} nav-link`}>
        {upperFirstLetter(type)}
      </NavLink>
    </li>
  );
};

export default NavBarLink;
