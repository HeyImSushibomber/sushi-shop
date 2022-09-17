import "./category-list.styles.scss";

import { Futomakis, Hosomakis, BubbleTea, Desserts, PokeBowl } from "../../.";
import CategoryItem from "../category-item/category-item.component";

const CategoryList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
