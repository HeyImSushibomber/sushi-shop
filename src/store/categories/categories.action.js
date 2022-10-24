import { createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const categoriesArray = await getCategoriesAndDocuments();
      return categoriesArray;
    } catch (error) {
      isRejected(error);
    }
  }
);
