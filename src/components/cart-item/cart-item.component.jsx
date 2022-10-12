import { useCart } from "../../context/cart-context";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart } = useCart();
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
          <button onClick={() => removeItemToCart(cartItem)}>-</button>
          <button onClick={() => addItemToCart(cartItem)}>+</button>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
