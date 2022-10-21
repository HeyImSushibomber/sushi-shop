import CategoryList from "../../components/category-list/category-list.component";

import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

const Home = () => {
  const categories = useSelector(selectCategories);

  return (
    <>
      <CategoryList categories={categories}></CategoryList>
    </>
  );
};

export default Home;
