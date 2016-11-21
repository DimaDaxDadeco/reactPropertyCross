import React, { Component } from "react";
import { connect } from "react-redux";
import { getFavouritesList } from "./action";
import RealtyList from "../common/realty-list";

class FavouritesList extends Component {

    componentDidMount() {
        this.props.getFavouritesList();
    }

    render() {

        const { favouritesList: { listings }, location: { pathname }, params: { id } } = this.props;

        return <RealtyList listings={listings} pathname={pathname} id={id} />;
    }
}

const mapStateToProps = ({ favouritesList }) => ({ favouritesList });

const mapDispatchToProps = {
    getFavouritesList
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList);