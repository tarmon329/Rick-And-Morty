import {
  faQuestion,
  faSkull,
  faHeartPulse,
  faMars,
  faVenus,
  faGenderless,
  faUserAstronaut,
  faDragon,
  faUser,
  faPaw,
  faVirusCovid,
  faRobot,
  faPoo,
  faBiohazard,
} from "@fortawesome/free-solid-svg-icons";

const decideIcon = (name) => {
  name = name?.toLowerCase();
  switch (name) {
    case "alive":
      return faHeartPulse;

    case "dead":
      return faSkull;

    case "human":
      return faUser;

    case "alien":
      return faUserAstronaut;

    case "poopybutthole":
      return faPoo;

    case "mythological creature":
      return faDragon;

    case "animal":
      return faPaw;

    case "disease":
      return faVirusCovid;

    case "robot":
      return faRobot;

    case "cronenberg":
      return faBiohazard;

    case "male":
      return faMars;

    case "female":
      return faVenus;

    case "genderless":
      return faGenderless;

    case "unknown":
      return faQuestion;

    default:
      return faQuestion;
  }
};

export default decideIcon;
