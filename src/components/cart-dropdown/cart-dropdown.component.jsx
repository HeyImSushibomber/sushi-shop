import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cart, toggleIsCartOpen } = useCart();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.length ? (
          cart.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <span className="empty-message">Cart is Empty</span>
        )}
      </div>
      <div>
        <Link to="checkout">
          <Button onClick={toggleIsCartOpen}>CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
