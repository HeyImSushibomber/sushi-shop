import { createSlice } from "@reduxjs/toolkit";
const CART_INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { setIsCartOpen, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
