import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { LocationsList, ResultsList, Realty, FavouritesList } from "components";
import configureStore from "./store/configureStore";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import App from "./app";

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LocationsList} />
                <Route path="results">
                    <Route path=":id" component={ResultsList} />
                    <Route path=":id/:title" component={Realty} />
                </Route>
                <Route path="favourites">
                    <Route path=":id" component={FavouritesList} />
                    <Route path=":id/:title" component={Realty} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("container")
);