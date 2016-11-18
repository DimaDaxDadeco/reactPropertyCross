import React, { Component } from "react";
import { Link } from "react-router";
import Realty from "./realty";

export default class RealtyList extends Component {

    eachRealty = (el, i) => (
        <Realty
            key={i}
            title={el.title}
            price={el.price}
            propertyType={el.property_type}
            imgUrl={el.img_url}
            realtyInfo={el}
            pathname={this.props.pathname}
        />
    )

    showLoadMore = (totalResults, currentPage) => totalResults !== currentPage && totalResults;

    render() {

        const { listings, totalResults } = this.props;
        const currentPage = listings.length;

        return (
            <div className="row results">
                <div id="back-button" className="btn btn-default">
                    <Link to={"/"}>Back</Link>
                </div>
                <div className="col-xs-12 count-matches">
                    {currentPage}
                    {totalResults ? <span> of {totalResults} </span> : null} matches
                </div>
                {listings.map(this.eachRealty)}
                {
                    this.showLoadMore(totalResults, currentPage) ?
                        <button name="load-more" className="btn btn-default" onClick={this.props.updateRealtyList}>load-more</button> : null
                }
            </div>
        );
    }
}