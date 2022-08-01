import createApiRoute from "./createApiRoute";

const fetchPageData = async (dataType, options) => {
  const api = createApiRoute(dataType, options);
  return fetch(api)
    .then((res) => {
      if (!res.ok)
        throw new Error("Something went Wubba lubba dub dub! Please try again");
      return res.json();
    })
    .catch((error) => ({ error }));
};

export default fetchPageData;
