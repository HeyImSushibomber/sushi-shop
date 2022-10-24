import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
        <span className="item-manage">
          <button
            onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
          >
            -
          </button>
          <button onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
            +
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
