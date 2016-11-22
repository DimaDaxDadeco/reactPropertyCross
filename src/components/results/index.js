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

    render() {

        const { realtysList: { listings, totalResults }, location: { pathname } } = this.props;

        return (
            <RealtyList listings={listings} totalResults={totalResults} pathname={pathname} updateRealtyList={this.updateRealtyList} />
        );
    }
}

const mapStateToProps = ({ realtysList }) => ({ realtysList });

const mapDispatchToProps = {
    getRealtysList
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);