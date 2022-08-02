const createIdArr = (type, arr) => {
  if (type === "episode") {
    return arr.characters.map((character) => {
      const index = character.lastIndexOf("/");
      return character.slice(index + 1);
    });
  }

  if (type === "episodes") {
    return arr.map((character) => {
      const index = character.lastIndexOf("/");
      return character.slice(index + 1);
    });
  }

  if (type === "location") {
    return arr.residents.map((character) => {
      const index = character.lastIndexOf("/");
      return character.slice(index + 1);
    });
  }
};

export default createIdArr;
