import "./App.css";
import CategoryList from "./components/category-list/category-list.component";

import { Futomakis, Hosomakis, BubbleTea, Desserts, PokeBowl } from ".";

const App = () => {
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

export default App;
