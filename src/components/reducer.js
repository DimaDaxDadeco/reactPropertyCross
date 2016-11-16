import { combineReducers } from "redux";
import locationsList from "./search/reducer";
import realtysList from "./results/reducer";

export default combineReducers({
    locationsList,
    realtysList
});