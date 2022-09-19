import CategoryList from "../../components/category-list/category-list.component";

// Menu Images
import Futomakis from "../.././assets/futomakis.jpg";
import Hosomakis from "../.././assets/hosomakis.jpg";
import BubbleTea from "../.././assets/bubble-tea.jpg";
import PokeBowl from "../.././assets/poke-bowl.jpg";
import Desserts from "../.././assets/desserts.jpeg";

export { Futomakis, Hosomakis, BubbleTea, PokeBowl, Desserts };

const Home = () => {
  const categories = [
    {
      title: "Futomakis",
      productImage: Futomakis,
      products: [],
    },
    {
      title: "Hosomakis",
      productImage: Hosomakis,
      products: [],
    },
    {
      title: "Poke bowl",
      productImage: PokeBowl,
      products: [],
    },
    {
      title: "Bubble Tea",
      productImage: BubbleTea,
      products: [],
    },
    {
      title: "Desserts",
      productImage: Desserts,
      products: [],
    },
  ];

  return (
    <>
      <CategoryList categories={categories}></CategoryList>
    </>
  );
};

export default Home;
