import { LOCATIONLOWER } from "../constants/constants";
import fetchPageData from "./fetchPageData";

const fetchLocationsLength = async () => {
  const locationsLengthData = await fetchPageData(LOCATIONLOWER);
  const locationsLength = locationsLengthData?.info
    ? locationsLengthData.info.count
    : 0;
  return locationsLength;
};

const fetchAllLocations = async () => {
  const locationLength = await fetchLocationsLength();
  const allLocationsId = Array.from(
    { length: locationLength },
    (_, i) => i + 1
  );
  const data = await fetchPageData(LOCATIONLOWER, allLocationsId);
  return data;
};

export default fetchAllLocations;
