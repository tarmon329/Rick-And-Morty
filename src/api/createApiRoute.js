import { APIURL } from "../constants/constants";

const createApiRoute = (dataType, queryOptions) => {
  let api = `${APIURL}/${dataType}/`;

  if (!queryOptions) return api;

  if (typeof queryOptions === "number") {
    return api + queryOptions;
  }

  if (Array.isArray(queryOptions)) {
    return api + queryOptions.join(",");
  }

  const queryArr = [];
  for (const [key, value] of Object.entries(queryOptions)) {
    queryArr.push(`${key}=${value}`);
  }
  const queryStr = "?" + queryArr.join("&");

  return api + queryStr;
};

export default createApiRoute;
