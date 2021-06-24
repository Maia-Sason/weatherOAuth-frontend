import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import rootReducer from "./reducers"; // combine reducer creates rootreducer

const initState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
