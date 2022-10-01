import "./checkout.styles.scss";
import { useCart } from "../../context/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const headers = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const { cart, totalPrice } = useCart();
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headers.map((header) => (
          <div className="header-block" key={header}>
            <span>{header}</span>
          </div>
        ))}
      </div>
      {cart.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}

      <span className="total">Total Price: ${totalPrice}</span>
    </div>
  );
};
export default Checkout;
