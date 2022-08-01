import CharacterCard from "../components/Cards/CharacterCard/CharacterCard";

const createCharactersDisplay = (charactersData) => {
  return charactersData.map((characterData) => {
    return (
      <div
        key={characterData.id}
        className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative"
      >
        <CharacterCard characterData={characterData} />
      </div>
    );
  });
};

export default createCharactersDisplay;
