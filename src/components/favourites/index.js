import React from "react";
import RealtyList from "../common/realty-list";

const FavouritesList = () => <RealtyList listings={JSON.parse(localStorage.favourites)} />;

export default FavouritesList;