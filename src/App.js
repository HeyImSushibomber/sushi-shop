import { CartProvider } from "./context/cart-context";
import { CategoriesProvider } from "./context/categories-context";
import Navigation from "./routes/navigation/navigation.component";

import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);

      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <CategoriesProvider>
      <CartProvider>
        <Navigation />
      </CartProvider>
    </CategoriesProvider>
  );
};

export default App;
