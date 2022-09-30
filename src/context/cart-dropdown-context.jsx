import { createContext, useCallback, useContext, useState } from "react";


const manageCart = (cart, item, type) => {
  
  const itemInCart = cart.find( (cartItem) => cartItem.id === item.id )

  if (itemInCart)
  {
    itemInCart.quantity = type === 'ADD' ? itemInCart.quantity + 1 : itemInCart.quantity - 1
    return [...cart]
  }
  else
  {
    if (type === 'ADD')
      return [...cart, {...item, quantity: 1}]
    else if (type === 'REMOVE')
      return [...cart.filter((cartItem) => cartItem.id !== item.id )]

  }
}

const CartDropdownContext = createContext({
  isCartOpen: false,
  toggleIsCartOpen: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalItemInCart: () => {}
});

const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([])

  const toggleIsCartOpen = useCallback(() => setIsCartOpen((x) => !x), []);
  const getTotalItemInCart = useCallback(() => cart.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0), [cart]);

  const addToCart = (item) => {
    setCart(manageCart(cart, item, 'ADD'))
  }

  const removeFromCart = (item) => {
    setCart(manageCart(cart, item, 'REMOVE'))
  }

  const value = { isCartOpen, setIsCartOpen, toggleIsCartOpen, addToCart, cart, getTotalItemInCart, removeFromCart };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};

const useCartDropdown = () => {
  const context = useContext(CartDropdownContext);
  if (context === undefined) {
    throw new Error("useCartDropdown must be used within CartDropdownProvider");
  }

  return context;
};

export { CartDropdownProvider, useCartDropdown };
