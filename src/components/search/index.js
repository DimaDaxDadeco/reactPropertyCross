import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocations, resetListings } from "./action";
import Location from "./location";
import { Link } from "react-router";
import Modal from "../common/modal";


class LocationsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            placeName: ""
        };
    }

    componentDidMount() {
        this.props.resetListings();
    }

    getLocations = () => {
        const url = `http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${this.state.placeName}`;
        this.props.getLocations(url);
    }

    getMyLocation = () => {
        let url = "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&centre_point=";
        const promise = new Promise ((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(result => {
                const coordinates = {
                    longitude:  result.coords.longitude,
                    latitude:  result.coords.latitude
                };
                url += coordinates.longitude + "," + coordinates.latitude;
                resolve(url);
            }, reject)
        }).then(url => {
            this.props.getLocations(url);
        });
    }

    onChangeHandler = e => {
        this.setState({
            placeName: e.target.value
        });
    }

    eachLocation = (el, i) => (
        <Location
            key={el.title}
            title={el.title}
            totalResults={el.totalResults}
            index={i + 1}
        />
    )

    render() {

        const { recentSearches } = this.props.locationsList;

        return (
            <div className="search-top">
                <Modal />
                <div className="row">
                    <div className="col-xs-12 favorites">
                        <Link to="/favourites/mybox" className="btn btn-default pull-right">Favourites</Link>
                    </div>
                </div>
                <div className="row">
                    <p className="col-xs-12">Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!</p>
                </div>
                <div className="row">
                    <div className="col-xs-12 form-inline">
                            <input
                                type="text"
                                name="searchText"
                                placeholder="Search..."
                                value={this.state.placeName}
                                onChange={this.onChangeHandler}
                                className="search-text form-control"/>
                            <button name="go" className="btn btn-default" onClick={this.getLocations}>Go</button>
                            <button name="myLocation" className="btn btn-default" onClick={this.getMyLocation}>My location</button>
                    </div>
                </div>
                <div className="row">
                    {recentSearches.map(this.eachLocation)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        locationsList: state.locationsList
    };
}

const mapDispatchToProps = {
    getLocations,
    resetListings
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);