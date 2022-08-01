const getLocationId = (location) => {
  return location.url.slice(location.url.lastIndexOf("/") + 1);
};

export default getLocationId;
