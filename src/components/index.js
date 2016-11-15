import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocations } from "./action";
import { LocationsList } from "./search";

class PropertyCross extends Component {
    render() {
        return (
            <LocationsList />
        );
    }
}