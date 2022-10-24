import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesRequestState,
} from "../../store/categories/categories.selector";

import "./menu.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

const Menu = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesRequestState = useSelector(selectCategoriesRequestState);

  console.log("menu.component - ", categoriesRequestState);

  return (
    <>
      {categoriesRequestState === "pending" ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((category) => {
          const items = categoriesMap[category];
          return (
            <CategoryPreview key={category} title={category} products={items} />
          );
        })
      )}
    </>
  );
};
export default Menu;
