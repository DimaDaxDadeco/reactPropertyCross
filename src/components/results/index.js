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
        this.props.getRealtysList(this.props.params.id, this.props.realtysList.numPage);
    }

    render() {

        const { listings, totalResults } = this.props.realtysList;
        const { id } = this.props.params;
        const typeOfSearch = "results";

        return (
            <RealtyList listings={listings} totalResults={totalResults} id={id} updateRealtyList={this.updateRealtyList} typeOfSearch={typeOfSearch} />
        );
    }
}

function mapStateToProps(state) {
    return {
        realtysList: state.realtysList
    };
}

const mapDispatchToProps = {
    getRealtysList
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);