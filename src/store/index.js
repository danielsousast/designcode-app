import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reactotron from "../config/ReactotronConfig";

import reducers from "./reducers";

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducers,
  compose(middleware, Reactotron.createEnhancer())
);

export default store;
