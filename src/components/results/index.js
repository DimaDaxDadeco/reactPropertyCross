import React, { Component } from "react";
import { connect } from "react-redux";
import { getRealtysList } from "./action";
import Realty from "./realty";
import { Link } from "react-router";
// import InfiniteScroll from "react-infinite-scroller";

class ResultsList extends Component {

    constructor(props) {
        super(props);
        /*this.state = {
            loading: false
        };*/
    }

    componentDidMount() {
        // const { numPage } = this.props.realtysList;
        // this.props.getRealtysList(this.props.params.id, numPage);
        this.updateRealtyList();
        /*this.setState({
            loading: true
        });*/
    }

    /*componentWillReceiveProps(nextProps) {
        if (nextProps.realtysList.length !== this.props.realtysList.length) {
            this.setState({
                loading: false
            });
        }
    }*/

    updateRealtyList = () => {
        this.props.getRealtysList(this.props.params.id, this.props.realtysList.numPage);
        /*this.setState({
            loading: true
        });*/
    }

    eachRealty = (el, i) => (
        <Realty
            key={i}
            title={el.title}
            price={el.price}
            propertyType={el.property_type}
            imgUrl={el.img_url}
        />
    )

    render() {

        const { listings, totalResults, numPage } = this.props.realtysList;
        const currentPage = listings.length;

        return (
            <div className="row results">
                <div id="back-button" className="btn btn-default">
                    <Link to={"/"}>Back</Link>
                </div>
                <div className="col-xs-12 count-matches">{currentPage} of {totalResults} matches</div>
                {
                    listings.map(this.eachRealty)
                }
                <button name="load-more" className="btn btn-default" onClick={this.updateRealtyList}>load-more</button>
            </div>
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