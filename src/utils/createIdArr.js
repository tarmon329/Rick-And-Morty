import {
  EPISODELOWER,
  EPISODESLOWER,
  LOCATIONLOWER,
} from "../constants/constants";

const createIdArr = (type, arr) => {
  const mapData = (data) => {
    return data.map((character) => {
      const index = character.lastIndexOf("/");
      return character.slice(index + 1);
    });
  };

  if (type === EPISODELOWER) {
    return mapData(arr.characters);
  }

  if (type === EPISODESLOWER) {
    return mapData(arr);
  }

  if (type === LOCATIONLOWER) {
    return mapData(arr.residents);
  }
};

export default createIdArr;
