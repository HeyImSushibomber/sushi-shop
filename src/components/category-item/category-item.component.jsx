import { Link } from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, productImage, products } = category;

  return (
    <div className="category-container">
      <Link to={`menu/${category.title}`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${productImage})` }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>{products.length} product(s)</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
