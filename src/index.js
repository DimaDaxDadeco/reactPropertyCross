import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import LocationsList from "./components/search";
import configureStore from "./store/configureStore";
import { Router, Route, Link, browserHistory } from "react-router";

const store = configureStore();

render(
  <Provider store={store}>
    <LocationsList />
  </Provider>
  ,
  document.getElementById("container")
);