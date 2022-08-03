import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  status: "",
  species: "",
  gender: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload };
    },
    setFilter: (state, action) => {
      return { ...state, [action.payload.type]: action.payload.value };
    },
    resetFilters: (state, action) => {
      const inputsArr = document.querySelectorAll("input[data-checked]");
      inputsArr.forEach((inp) => inp.setAttribute("data-checked", "false"));
      return initialState;
    },
  },
});

export const { setName, setFilter, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
