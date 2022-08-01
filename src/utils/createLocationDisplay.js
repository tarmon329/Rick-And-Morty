import Cards from "../components/Cards/Cards";

const createLocationDisplay = (fetchedData, charactersData) => {
  let characterDispaly = "";

  if (
    fetchedData?.error ||
    (fetchedData.residents && fetchedData.residents.length !== 0)
  ) {
    characterDispaly = (
      <Cards
        charactersData={charactersData}
        error={charactersData?.error || fetchedData?.error}
      />
    );
  } else {
    characterDispaly = <h4 className="mt-5">NO RESIDENTS ON THIS LOCATION</h4>;
  }

  return characterDispaly;
};

export default createLocationDisplay;
