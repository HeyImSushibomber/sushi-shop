import { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";
import useHasLoggedIn from "../utils/useLoggedIn";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { hasLoggedIn, enable } = useHasLoggedIn();
  const { width, height } = useWindowSize();

  const [user, setCurrentUser] = useState(null);
  const value = { user, setCurrentUser, hasLoggedIn, enable };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);

      setCurrentUser(user);
    });

    return unsubscribe;
  }, [hasLoggedIn]);

  return (
    <UserContext.Provider value={value}>
      {children}
      {user && hasLoggedIn ? (
        <Confetti
          width={width}
          height={height}
          initialVelocityX={5}
          initialVelocityY={10}
          numberOfPieces={300}
          recycle={false}
        ></Confetti>
      ) : (
        ""
      )}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
};

export { UserProvider, useUser };
