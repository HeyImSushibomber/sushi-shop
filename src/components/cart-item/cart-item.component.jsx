import { useCartDropdown } from "../../context/cart-dropdown-context";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { addToCart, removeFromCart } = useCartDropdown();

  const { name, price, quantity, imageUrl } = cartItem;

  const addItemToCart = () => addToCart(cartItem);
  const removeItemFromCart = () => removeFromCart(cartItem);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
        <span>
          <button onClick={removeItemFromCart}>-</button>
          <button onClick={addItemToCart}>+</button>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
