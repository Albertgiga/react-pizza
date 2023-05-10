import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from "./types";

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, actions: PayloadAction<number>) {
      state.categoryId = actions.payload;
    },
    setSearchValue(state, actions: PayloadAction<string>) {
      state.searchValue = actions.payload;
    },
    setSort(state, actions: PayloadAction<Sort>) {
      state.sort = actions.payload;
    },
    setCurrentPage(state, actions: PayloadAction<number>) {
      state.currentPage = actions.payload;
    },
    setFilters(state, actions: PayloadAction<FilterSliceState>) {
      if (Object.keys(actions.payload).length){
        state.sort = actions.payload.sort
        state.categoryId = Number(actions.payload.categoryId)
        state.currentPage = Number(actions.payload.currentPage)
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sort = {
          name: 'популярности',
          sortProperty: SortPropertyEnum.RATING_DESC,
        }
      }
      
    }
  },
});

export const { setCategoryId, setSort, setCurrentPage, setFilters,  setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
