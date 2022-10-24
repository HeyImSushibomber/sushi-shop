import { combineReducers } from "redux";
import { userSlice } from "./user/userSlice";
import { categoriesSlice } from "./categories/categoriesSlice";
import { cartSlice } from "./cart/cartSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  categories: categoriesSlice.reducer,
  cart: cartSlice.reducer,
});
