import { CartProvider } from "./context/cart-context";
import { CategoriesProvider } from "./context/categories-context";
import { UserProvider } from "./context/user-context";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <Navigation />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </>
  );
};

export default App;
