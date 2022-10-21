import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

import "./menu.styles.scss";

const Menu = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
