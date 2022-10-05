import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useCategories } from "../../context/categories-context";

import "./menu.styles.scss";

const Menu = () => {
  const { categoriesMap } = useCategories();

  return (
    <>
      {Object.keys(categoriesMap).map((category) => {
        const items = categoriesMap[category];
        return (
          <CategoryPreview key={category} title={category} products={items} />
        );
      })}
    </>
  );
};
export default Menu;
