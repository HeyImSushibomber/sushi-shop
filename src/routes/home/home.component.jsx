import CategoryList from "../../components/category-list/category-list.component";

// Menu Images
import Futomakis from "../.././assets/futomakis.jpg";
import Hosomakis from "../.././assets/hosomakis.jpg";
import BubbleTea from "../.././assets/bubble-tea.jpg";
import PokeBowl from "../.././assets/poke-bowl.jpg";
import Desserts from "../.././assets/desserts.jpeg";
import { useCategories } from "../../context/categories-context";

export { Futomakis, Hosomakis, BubbleTea, PokeBowl, Desserts };

const Home = () => {
  const { categories } = useCategories();

  return (
    <>
      <CategoryList categories={categories}></CategoryList>
    </>
  );
};

export default Home;
