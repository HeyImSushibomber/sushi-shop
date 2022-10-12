import { createContext, useContext, useReducer } from "react";

const actionTypes = {
  setCartItems: "SET_CART_ITEMS",
  setCartIsOpen: "SET_CART_IS_OPEN",
};

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
};

function cartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.setCartItems:
      return { ...state, ...payload };
    case actionTypes.setCartIsOpen:
      return { ...state, ...payload };
    default:
      throw new Error(`unhandled type within cartReducer: ${type} is invalid`);
  }
}

const findItemInCart = (cartItems, item) =>
  cartItems.find((cartItem) => cartItem.id === item.id);

const addCartItem = (cartItems, itemToAdd) => {
  const itemExistInCart = findItemInCart(cartItems, itemToAdd);

  if (itemExistInCart) {
    itemExistInCart.quantity += 1;
    return [...cartItems];
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, itemToRemove) => {
  const itemExistInCart = findItemInCart(cartItems, itemToRemove);

  if (itemExistInCart) itemExistInCart.quantity -= 1;

  if (itemExistInCart && itemExistInCart.quantity === 0)
    return clearCartItem(cartItems, itemToRemove);

  return [...cartItems];
};

const clearCartItem = (cartItems, itemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);

const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
  setCartIsOpen: () => {},
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
});

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, isCartOpen, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
      0
    );

    const newCartCount = newCartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );

    dispatch({
      type: actionTypes.setCartItems,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const setCartIsOpen = () => {
    dispatch({
      type: actionTypes.setCartIsOpen,
      payload: {
        isCartOpen: !isCartOpen,
      },
    });
  };

  console.log(state);
  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    setCartIsOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
};

export { CartProvider, useCart };
