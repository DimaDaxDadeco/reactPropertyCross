import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocations, resetListings } from "./action";
import Location from "./location";

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
                <div className="row">
                    <div className="col-xs-12 favorites"><a className="btn btn-default pull-right" role="button">Favourite</a></div>
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
                            <button name="myLocation" className="btn btn-default" onClick={this.searchMyLocation}>My location</button>
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