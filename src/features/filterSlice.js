import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    make: "",
    model: "",
    year: "",
    minPrice: "",
    maxPrice: ""
  },
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action.payload };
    }
  }
});

export const { setFilters } = filterSlice.actions;
export const selectFilters = (state) => state.filters;
export default filterSlice.reducer;
