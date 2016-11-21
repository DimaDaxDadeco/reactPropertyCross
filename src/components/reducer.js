import { combineReducers } from "redux";
import locationsList from "./search/reducer";
import realtysList from "./results/reducer";
import realty from "./realty/reducer";
import favouritesList from "./favourites/reducer";
import modalView from "./common/modal/reducer";

export default combineReducers({
    locationsList,
    realtysList,
    realty,
    favouritesList,
    modalView
});