import APIURL from "./APIURL";

const createApiRoute = (dataType, queryOptions) => {
  let api = `${APIURL}/${dataType}/`;

  if (!queryOptions) return api;

  const queryArr = [];
  for (const [key, value] of Object.entries(queryOptions)) {
    queryArr.push(`${key}=${value}`);
  }
  const queryStr = "?" + queryArr.join("&");

  return api + queryStr;
};

export default createApiRoute;
