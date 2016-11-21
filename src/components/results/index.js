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
        const { getRealtysList, params: { id }, realtysList: { numPage } } = this.props;
        getRealtysList(id, numPage);
    }

    render() {

        const { realtysList: { listings, totalResults }, params: { id }, location: { pathname } } = this.props;

        return (
            <RealtyList listings={listings} totalResults={totalResults} id={id} pathname={pathname} updateRealtyList={this.updateRealtyList} />
        );
    }
}

const mapStateToProps = ({ realtysList }) => ({ realtysList });

const mapDispatchToProps = {
    getRealtysList
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);