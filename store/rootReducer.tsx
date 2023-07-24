// src/store/rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// slices
import authReducer from "./slices/auth";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["settings"],
};

const authPersistConfig = {
  key: "authJwt",
  storage,
  keyPrefix: "redux-",
  whitelist: ["isAuthenticated"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export type IRootState = ReturnType<typeof rootReducer>;
export { rootPersistConfig, rootReducer };
