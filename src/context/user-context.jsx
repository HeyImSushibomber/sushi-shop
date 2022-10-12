import { createContext, useContext, useReducer, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const UserContext = createContext();

const actionTypes = {
  setCurrentUser: "SET_CURRENT_USER",
};

const INITIAL_USER_STATE = {
  currentUser: null,
};

function userReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.setCurrentUser:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Invalid use of UserReducer: ${type} is not valid`);
  }
}

const UserProvider = ({ children }, { reducer = userReducer } = {}) => {
  const [{ currentUser }, dispatch] = useReducer(reducer, INITIAL_USER_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: actionTypes.setCurrentUser, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
};

export { UserProvider, useUser };
