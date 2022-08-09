import fetchPageData from "./fetchPageData";

const fetchLength = async (type) => {
  const lengthData = await fetchPageData(type);
  const finalLength = lengthData?.info.count ?? 0;
  return finalLength;
};

export default fetchLength;
