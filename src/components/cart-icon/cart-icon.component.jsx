import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useCart } from "../../context/cart-context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { toggleIsCartOpen, getTotalItemInCart } = useCart();

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{getTotalItemInCart()}</span>
    </div>
  );
};

export default CartIcon;
