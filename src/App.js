import Navigation from "./routes/navigation/navigation.component";

import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
} from "./utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/userSlice";
import { setCategories } from "./store/categories/categoriesSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);

      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    fetchCategories();
  }, []);

  return <Navigation />;
};

export default App;
