import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useCartDropdown } from "../../context/cart-dropdown-context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { toggleIsCartOpen, getTotalItemInCart } = useCartDropdown();

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{getTotalItemInCart()}</span>
    </div>
  );
};

export default CartIcon;
