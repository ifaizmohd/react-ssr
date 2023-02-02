import React from "react";
import { renderRoutes } from "react-router-config";
import { fetch_current_user } from "./actions";
import Header from "./components/Header";

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetch_current_user()),
};
