import { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { width, height } = useWindowSize();

  const [user, setCurrentUser] = useState(null);
  const value = { user, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}>
      {children}
      {user ? (
        <Confetti
          width={width}
          height={height}
          initialVelocityX={3}
          initialVelocityY={5}
          numberOfPieces={200}
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
