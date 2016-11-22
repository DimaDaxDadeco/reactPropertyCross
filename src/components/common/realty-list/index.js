import React, { Component } from "react";
import { Link } from "react-router";
import Realty from "./item";

export default class RealtyList extends Component {

    get realtiesList() {
        const listings = this.props.listings.map((el, i) => (
            <Realty
                key={i}
                realtyInfo={el}
            />
        ));
        return listings;
    }

    render() {

        const { listings, totalResults } = this.props;
        const resultsShowing = listings.length;

        return (
            <div className="row results">
                <div className="btn btn-default back-button">
                    <Link to={"/"}>Back</Link>
                </div>
                <div className="col-xs-12 count-matches">
                    {resultsShowing}
                    {totalResults && <span> of {totalResults} </span>} matches
                </div>
                {this.realtiesList}
            </div>
        );
    }
}