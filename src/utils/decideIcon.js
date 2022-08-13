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
  const icons = {
    alive: faHeartPulse,
    dead: faSkull,
    human: faUser,
    alien: faUserAstronaut,
    poopybutthole: faPoo,
    "mythological creature": faDragon,
    animal: faPaw,
    disease: faVirusCovid,
    robot: faRobot,
    cronenberg: faBiohazard,
    male: faMars,
    female: faVenus,
    genderless: faGenderless,
    unknown: faQuestion,
  };

  name = name?.toLowerCase();

  if (!name) {
    name = "unknown";
  }

  return icons[name];
};

export default decideIcon;
