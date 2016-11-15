import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import LocationsList from "./components/search";
import ResultsList from "./components/results";
import configureStore from "./store/configureStore";
import { Router, Route, browserHistory } from "react-router";

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={LocationsList} />
        <Route path="/results/:id" component={ResultsList} />
    </Router>
  </Provider>,
  document.getElementById("container")
);