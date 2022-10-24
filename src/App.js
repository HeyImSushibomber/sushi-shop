import Navigation from "./routes/navigation/navigation.component";

import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/userSlice";
import { fetchCategories } from "./store/categories/categories.action";

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
    dispatch(fetchCategories());
  }, []);

  return <Navigation />;
};

export default App;
