import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { LocationsList, ResultsList, Realty, FavouritesList } from "components";
import configureStore from "./store/configureStore";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import App from "./app";

(() => {
    const localStorageNames = ["favourites", "recentSearches"];
    localStorageNames.forEach(item => {
        if (!localStorage[item]) {
            localStorage[item] = JSON.stringify([]);
        }
    });
})();

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LocationsList} />
                <Route path="results">
                    <Route path=":query" component={ResultsList} />
                    <Route path=":query/:title" component={Realty} />
                </Route>
                <Route path="favourites">
                    <Route path=":query" component={FavouritesList} />
                    <Route path=":query/:title" component={Realty} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("container")
);