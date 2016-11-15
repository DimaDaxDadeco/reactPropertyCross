import React, { Component } from "react";

export default class Location extends Component {
    render() {

        const { index, title, totalResults } = this.props;

        return (
            <div className="col-xs-12 search-res">
                <span className="index">#{index}</span>
                <span className="title">{title}(<span className="totalResults">{totalResults}</span>)</span>
            </div>
        );
    }
}