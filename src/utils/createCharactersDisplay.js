import CharacterCard from "../components/CharacterCard/CharacterCard";

const createCharactersDisplay = (charactersData) => {
  return charactersData.map((characterData) => {
    return (
      <div key={characterData.id} className="col-4 position-relative mb-4">
        <CharacterCard characterData={characterData} />
      </div>
    );
  });
};

export default createCharactersDisplay;
