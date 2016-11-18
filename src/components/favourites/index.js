import React, { Component } from "react";
import { connect } from "react-redux";
import { getFavouritesList } from "./action";
import RealtyList from "../common/realty-list";

class FavouritesList extends Component {

    componentDidMount() {
        this.props.getFavouritesList();
    }

    render() {

        const { listings } = this.props.favouritesList;
        const { pathname } = this.props.location;
        const { id } = this.props.params;

        return (
            <RealtyList listings={listings} pathname={pathname} id={id} />
        );
    }
}

function mapStateToProps(state) {
    return {
        favouritesList: state.favouritesList
    };
}

const mapDispatchToProps = {
    getFavouritesList
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList);