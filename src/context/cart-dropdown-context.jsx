import { createContext, useCallback, useContext, useState } from "react";

const CartDropdownContext = createContext({
  isCartOpen: false,
  toggleIsCartOpen: () => {},
});

const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleIsCartOpen = useCallback(() => setIsCartOpen((x) => !x), []);

  const value = { isCartOpen, setIsCartOpen, toggleIsCartOpen };
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
