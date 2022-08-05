const createIdArr = (type, arr) => {
  const mapData = (data) => {
    return data.map((character) => {
      const index = character.lastIndexOf("/");
      return character.slice(index + 1);
    });
  };

  if (type === "episode") {
    return mapData(arr.characters);
  }

  if (type === "episodes") {
    return mapData(arr);
  }

  if (type === "location") {
    return mapData(arr.residents);
  }
};

export default createIdArr;
