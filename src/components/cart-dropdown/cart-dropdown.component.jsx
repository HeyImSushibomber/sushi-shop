import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cartSlice";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <span className="empty-message">Cart is Empty</span>
        )}
      </div>
      <div>
        <Link to="checkout">
          <Button onClick={setIsCartOpen}>CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
