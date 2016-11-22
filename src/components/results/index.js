import React, { Component } from "react";
import { connect } from "react-redux";
import { getRealtysList } from "./action";
import RealtyList from "../common/realty-list";

class ResultsList extends Component {

    componentDidMount() {
        if (!this.props.realtysList.listings.length) {
            this.updateRealtyList();
        }
    }

    updateRealtyList = () => {
        const { getRealtysList, params: { query }, realtysList: { numPage } } = this.props;
        getRealtysList(query, numPage);
    }

    get loadMoreButton() {
        const { totalResults, listings } = this.props.realtysList;
        const resultsShowing = listings.length;
        if (totalResults !== resultsShowing && totalResults) {
            return <button name="load-more" className="btn btn-default" onClick={this.updateRealtyList}>load-more</button>;
        }
    }

    render() {

        const { realtysList: { listings, totalResults } } = this.props;

        return (
            <div>
                <RealtyList listings={listings} totalResults={totalResults} />
                {this.loadMoreButton}
            </div>
        );
    }
}

const mapStateToProps = ({ realtysList }) => ({ realtysList });

const mapDispatchToProps = {
    getRealtysList
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);