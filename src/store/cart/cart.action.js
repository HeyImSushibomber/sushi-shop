import { setCartItems } from "./cartSlice";

const findItemInCart = (cartItems, item) =>
  cartItems.find((cartItem) => cartItem.id === item.id);

const addCartItem = (cartItems, itemToAdd) => {
  const itemExistInCart = findItemInCart(cartItems, itemToAdd);

  if (itemExistInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const itemExistInCart = findItemInCart(cartItems, itemToRemove);

  if (itemExistInCart.quantity === 1)
    return clearCartItem(cartItems, itemToRemove);

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, itemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);

export const addItemToCart = (cartItems, itemToAdd) => (dispatch) => {
  const newCartItems = addCartItem(cartItems, itemToAdd);
  dispatch(setCartItems(newCartItems));
};

export const removeItemToCart = (cartItems, itemToRemove) => (dispatch) => {
  const newCartItems = removeCartItem(cartItems, itemToRemove);
  dispatch(setCartItems(newCartItems));
};

export const clearItemFromCart = (cartItems, itemToClear) => (dispatch) => {
  const newCartItems = clearCartItem(cartItems, itemToClear);
  dispatch(setCartItems(newCartItems));
};
