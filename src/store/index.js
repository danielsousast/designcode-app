import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import Reactotron from "../config/ReactotronConfig";
import reducers from "./reducers";
import AsyncStorage from "@react-native-community/async-storage";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["app"],
  },
  reducers
);

const middleware = applyMiddleware(thunk);

const store = createStore(
  persistedReducer,
  compose(middleware, Reactotron.createEnhancer())
);

const persistor = persistStore(store);

export { store, persistor };
