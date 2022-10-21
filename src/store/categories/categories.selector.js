import { createSelector } from "@reduxjs/toolkit";
import { getRandomInt } from "../../utils/number";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) =>
    categoriesSlice.categories.map((category) => {
      const { title, items } = category;
      return {
        title,
        products: items,
        route: `menu/${title.toLowerCase()}`,
        categoryImage: items[getRandomInt(0, items.length)].imageUrl,
      };
    })
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories.reduce((acc, data) => {
      const { title, items } = data;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
