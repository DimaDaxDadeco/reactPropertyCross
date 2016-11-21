import React, { Component } from "react";
import { Link } from "react-router";
import Realty from "./realty";

export default class RealtyList extends Component {

    eachRealty = (el, i) => (
        <Realty
            key={i}
            realtyInfo={el}
            pathname={this.props.pathname}
        />
    )

    get showLoadMore() {
        const { totalResults, listings, updateRealtyList } = this.props;
        const resultsShowing = listings.length;
        if (totalResults !== resultsShowing && totalResults) {
            return <button name="load-more" className="btn btn-default" onClick={updateRealtyList}>load-more</button>;
        }
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
                {listings.map(this.eachRealty)}
                {this.showLoadMore}
            </div>
        );
    }
}