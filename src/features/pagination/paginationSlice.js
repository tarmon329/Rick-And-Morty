import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePage(state, action) {
      return { page: action.payload };
    },
    resetPage() {
      return { page: 1 };
    },
  },
});

export const { changePage, resetPage } = paginationSlice.actions;

export default paginationSlice.reducer;
