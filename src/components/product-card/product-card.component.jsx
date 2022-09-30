import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useCartDropdown } from "../../context/cart-dropdown-context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addToCart } = useCartDropdown();

  const addProductToCart = () => addToCart(product);

  return (
    <div className="product-card-container">
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
