import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cartSlice";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const handleOnClickSetIsCartOpen = () => {
    dispatch(setIsCartOpen());
  };

  return (
    <div className="cart-icon-container" onClick={handleOnClickSetIsCartOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
