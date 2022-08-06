import Cards from "../components/Cards/Cards";

const createLocationCharacters = (fetchedData, charactersData) => {
  let characterDisplay = "";

  if (fetchedData?.error || fetchedData?.residents?.length !== 0) {
    characterDisplay = (
      <Cards
        charactersData={charactersData}
        error={charactersData?.error || fetchedData?.error}
      />
    );
  } else {
    characterDisplay = <h4 className="mt-5">NO RESIDENTS ON THIS LOCATION</h4>;
  }

  return characterDisplay;
};

export default createLocationCharacters;
