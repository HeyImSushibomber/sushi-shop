import { UserProvider } from "./context/user-context";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </>
  );
};

export default App;
