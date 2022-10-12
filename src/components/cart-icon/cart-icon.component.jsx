import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useCart } from "../../context/cart-context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setCartIsOpen, cartCount } = useCart();

  return (
    <div className="cart-icon-container" onClick={setCartIsOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
