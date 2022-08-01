import React from "react";

import createCharactersDisplay from "../../utils/createCharactersDisplay";
import NoCharacters from "../NoCharacters/NoCharacters";

const Cards = ({ charactersData, error }) => {
  if (!charactersData || error) {
    return <NoCharacters error={error} />;
  }
  return (
    <React.Fragment>{createCharactersDisplay(charactersData)}</React.Fragment>
  );
};

export default Cards;
