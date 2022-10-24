import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "categories"],
  devTools: process.env.NODE_ENV !== "production",
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    let defaultMiddleware = getDefaultMiddleware({
      serializableCheck: false,
    });

    if (process.env.NODE_ENV !== "production")
      return defaultMiddleware.concat(logger);
    return defaultMiddleware;
  },
});

export const persistor = persistStore(store);
