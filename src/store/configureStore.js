import { createStore, applyMiddleware } from "redux";
import rootReducer from "../components/reducer";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    );

    if (module.hot) {
        module.hot.accept("../components/reducer", () => {
            const nextRootReducer = require("../components/reducer");
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}