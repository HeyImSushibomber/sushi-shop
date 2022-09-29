import { CartDropdownProvider } from "./context/cart-dropdown-context";
import { ProductsProvider } from "./context/products-context";
import { UserProvider } from "./context/user-context";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <CartDropdownProvider>
            <Navigation />
          </CartDropdownProvider>
        </ProductsProvider>
      </UserProvider>
    </>
  );
};

export default App;
