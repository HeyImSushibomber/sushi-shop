import ProductCard from "../../components/product-card/product-card.component";
import { useProducts } from "../../context/products-context";

import "./menu.styles.scss";

const Menu = () => {
  const { products } = useProducts();

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};
export default Menu;
