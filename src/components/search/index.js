import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocations, getMyLocations, resetListings } from "./action";
import Location from "./location";
import { Link } from "react-router";
import GeolocationService from "../services/GeolocationService";


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
        this.props.getLocations(this.state.placeName);
    }

    getMyLocation = () => (
        GeolocationService.getCoordinates()
            .then(this.props.getMyLocations)
    )

    onChangeHandler = e => {
        this.setState({
            placeName: e.target.value
        });
    }

    get recentSearches() {
        const searches = this.props.locationsList.recentSearches.map((el, i) => (
            <Location
                key={el.title}
                title={el.title}
                totalResults={el.totalResults}
                index={i + 1}
            />
        ));
        return (
            <div className="row">
                {searches}
            </div>
        );
    }

    render() {
        return (
            <div className="search-top">
                <div className="row">
                    <div className="col-xs-12 favorites">
                        <Link to="/favourites" className="btn btn-default pull-right">Favourites</Link>
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
                            className="search-text form-control"
                        />
                        <button name="go" className="btn btn-default" onClick={this.getLocations}>Go</button>
                        <button name="myLocation" className="btn btn-default" onClick={this.getMyLocation}>My location</button>
                    </div>
                </div>
                {this.recentSearches}
            </div>
        );
    }
}

const mapStateToProps = ({ locationsList }) => ({ locationsList });

const mapDispatchToProps = {
    getLocations,
    resetListings,
    getMyLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);