import "./product-card.styles.scss";
import Button from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => dispatch(addItemToCart(cartItems, product))}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
