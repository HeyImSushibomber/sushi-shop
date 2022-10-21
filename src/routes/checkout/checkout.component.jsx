import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const headers = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headers.map((header) => (
          <div className="header-block" key={header}>
            <span>{header}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}

      <span className="total">Total Price: ${cartTotal}</span>
    </div>
  );
};
export default Checkout;
