import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярность",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, actions) {
      state.categoryId = actions.payload;
    },
    setSort(state, actions) {
      state.sort = actions.payload;
    },
    setCurrentPage(state, actions) {
      state.currentPage = actions.payload;
    },
    setFilters(state, actions) {
      state.sort = actions.payload.sort
      state.categoryId = Number(actions.payload.categoryId)
      state.currentPage = Number(actions.payload.currentPage)
    }
  },
});

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
