import { LOCATIONLOWER } from "../constants/constants";
import fetchLength from "./fetchLength";
import fetchPageData from "./fetchPageData";

const fetchAllLocations = async () => {
  const locationLength = await fetchLength(LOCATIONLOWER);
  const allLocationsId = Array.from(
    { length: locationLength },
    (_, i) => i + 1
  );
  const data = await fetchPageData(LOCATIONLOWER, allLocationsId);
  return data;
};

export default fetchAllLocations;
