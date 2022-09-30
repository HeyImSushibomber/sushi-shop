import { CartProvider } from "./context/cart-context";
import { ProductsProvider } from "./context/products-context";
import { UserProvider } from "./context/user-context";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <Navigation />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </>
  );
};

export default App;
