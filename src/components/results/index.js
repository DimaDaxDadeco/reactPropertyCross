import React, { Component } from "react";
import { connect } from "react-redux";

class ResultsList extends Component {
    componentDidMount() {
        /*this.setState({
            user: findUserById(this.props.params.id)
        })*/
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <img src="http://imgs.nestimg.com/semi_detached_new_farnley_leeds_1820123478954897006.jpg" />
                    <span className="title">title</span>
                    <span className="price">price</span>
                </div>
            </div>
        );
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