const fetchByURL = async (url) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok)
        throw new Error("Something went Wubba lubba dub dub! Please try again");
      return res.json();
    })
    .catch((error) => ({ error }));
};

export default fetchByURL;
