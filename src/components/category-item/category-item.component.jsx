import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, productImage, products } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${productImage})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{products.length} product(s)</p>
      </div>
    </div>
  );
};

export default CategoryItem;
