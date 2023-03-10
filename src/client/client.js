// Entry point for the client side application.
import Axios from "axios";
import "babel-polyfill";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import Routes from "./Routes";

let INITIAL_STATE = {};

const axiosInstance = Axios.create({
  baseURL: "/api",
});

if (window) {
  INITIAL_STATE = window.INITIAL_STATE;
}
const store = createStore(
  reducers,
  INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
