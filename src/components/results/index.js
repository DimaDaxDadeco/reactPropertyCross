import React, { Component } from "react";
import { connect } from "react-redux";

class ResultsList extends Component {
    render() {
        return <div>I'm results</div>;
    }
}

function mapStateToProps(state) {
    return {
        // locationsList: state.locationsList
    };
}

const mapDispatchToProps = {
    // getLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);