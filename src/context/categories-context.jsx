import { createContext, useContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

const CategoriesContext = createContext({
  categoriesMap: {},
  categories: [],
});

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [categories, setCategories] = useState([]);
  const value = { categoriesMap, categories };

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      const categoriesArray = Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return {
          title,
          products: products,
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
