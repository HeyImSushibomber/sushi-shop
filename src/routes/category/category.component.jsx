import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { useCategories } from "../../context/categories-context";
import { useState, useEffect } from "react";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategories();

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h2>{category}</h2>
      <div className="products-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
