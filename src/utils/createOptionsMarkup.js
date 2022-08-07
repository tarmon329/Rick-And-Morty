const createOptionsMarkup = (options) => {
  return options.map((option) => {
    return (
      <option key={option.id} value={option.id}>
        {option.name}
      </option>
    );
  });
};

export default createOptionsMarkup;
