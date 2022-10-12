import "./checkout.styles.scss";
import { useCart } from "../../context/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const headers = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
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
