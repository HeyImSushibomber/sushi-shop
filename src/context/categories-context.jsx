import { createContext, useContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

const CategoriesContext = createContext({
  categoriesMap: {},
  categories: [],
});

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [categories, setCategories] = useState([]);
  const value = { categoriesMap, categories };

  console.log(categories);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      const categoriesArray = Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return {
          title,
          products: products,
          route: `menu/${title}`,
          categoryImage: products[getRandomInt(0, products.length)].imageUrl,
        };
      });
      setCategories(categoriesArray);
      setCategoriesMap(categoriesMap);
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within ProductsProvider");
  }

  return context;
};

export { CategoriesProvider, useCategories };
