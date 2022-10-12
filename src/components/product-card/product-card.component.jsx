import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useCart } from "../../context/cart-context";
//import { Toast, useToastControls } from "../../store/toasts";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useCart();

  return (
    <div className="product-card-container">
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
        Add to cart
      </Button>
      {/* <Toast uniqueId={name}>{name} has been added to the cart!</Toast> */}
    </div>
  );
};

export default ProductCard;
