import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";

const manageCart = (cart, item, type) => {
  const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

  switch (type) {
    case "INCREMENT":
      if (itemInCart) {
        itemInCart.quantity += 1;
        return [...cart];
      } else return [...cart, { ...item, quantity: 1 }];
    case "DECREMENT":
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
        return [...cart];
      } else return [...removeItemFromCart(cart, item)];
    case "REMOVE":
      return [...removeItemFromCart(cart, item)];
    default:
      return [...cart];
  }
};

const removeItemFromCart = (cart, item) =>
  cart.filter((cartItem) => cartItem.id !== item.id);

const CartContext = createContext({
  isCartOpen: false,
  toggleIsCartOpen: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearItemFromCart: () => {},
  getTotalItemInCart: () => {},
  totalPrice: 0,
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const toggleIsCartOpen = useCallback(() => setIsCartOpen((x) => !x), []);
  const getTotalItemInCart = useCallback(
    () => cart.reduce((total, currentItem) => total + currentItem.quantity, 0),
    [cart]
  );
  const addToCart = (item) => {
    setCart(manageCart(cart, item, "INCREMENT"));
  };

  const removeFromCart = (item) => {
    setCart(manageCart(cart, item, "DECREMENT"));
  };

  const clearItemFromCart = (item) => {
    setCart(manageCart(cart, item, "REMOVE"));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    toggleIsCartOpen,
    addToCart,
    cart,
    getTotalItemInCart,
    removeFromCart,
    clearItemFromCart,
    totalPrice,
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
