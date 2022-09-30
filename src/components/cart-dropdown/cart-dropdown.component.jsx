import { useCartDropdown } from "../../context/cart-dropdown-context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cart } = useCartDropdown();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.length ? (
          cart.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <span className="empty-message">Cart is Empty</span>
        )}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
