import React, { Component } from "react";
import RealtyList from "../common/realty-list";

export default class FavouritesList extends Component {

    get listings() {
        return JSON.parse(localStorage.favourites);
    }

    render() {
        const { pathname } = this.props.location;
        return <RealtyList listings={this.listings} pathname={pathname} />;
    }
}