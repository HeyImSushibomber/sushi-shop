import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cart }) => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      {/* {cart.length ? "" : <span className="empty-message">Cart is Empty</span>} */}

      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
