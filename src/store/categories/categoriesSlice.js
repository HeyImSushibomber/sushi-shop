import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categories.action";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
  requestState: "",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.requestState = "pending";
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.requestState = "fulfilled";
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.requestState = "rejected";
    });
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
