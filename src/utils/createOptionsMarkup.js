import { EPISODE, LOCATION } from "../constants/constants";

const createLocationMarkup = (options) => {
  return options.map((option) => (
    <option key={option.id} value={option.id}>
      {option.name}
    </option>
  ));
};

const createOptionMarkup = (options) => {
  const lastSeasonNum = +options.at(-1).episode.slice(1, 3);
  const seasonsArr = Array.from({ length: lastSeasonNum }, (_, i) => (
    <optgroup key={i} label={`Season ${i + 1}`}>
      {options.map((option) => {
        const seasonStr = `S0${i + 1}`;
        if (option.episode.includes(seasonStr)) {
          return (
            <option key={option.id} value={option.id}>
              {option.episode} - {option.name}
            </option>
          );
        }
        return null;
      })}
    </optgroup>
  ));
  return seasonsArr;
};

const createOptionsMarkup = (type, options) => {
  let optionsMarkup = "";
  if (options.error || options.length === 0) {
    optionsMarkup = <option value="1">Error: {options.error}</option>;
  } else if (type === LOCATION) {
    optionsMarkup = createLocationMarkup(options);
  } else if (type === EPISODE) {
    optionsMarkup = createOptionMarkup(options);
  }

  return optionsMarkup;
};

export default createOptionsMarkup;
