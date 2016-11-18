import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import { selectRealty } from "../../results/action";
import { connect } from "react-redux";

class Realty extends Component {

    componentDidMount() {
        this.scrollToSelectedElement();
    }

    selectRealty = realtyInfo => () => {
        this.props.selectRealty(realtyInfo);
    }

    scrollToSelectedElement = () => {
        if (this.props.realty.eachRealtyInfo) {
            const node = ReactDOM.findDOMNode(this);
            const { title: titleOfSelectedRealty } = this.props.realty.eachRealtyInfo;
            const { title: titleEachRealty } = this.props;

            if (titleOfSelectedRealty === titleEachRealty) {
                 node.scrollIntoView();
            }
        }
    }

    render() {

        const { title, price, propertyType, imgUrl, realtyInfo, pathname } = this.props;

        return (
            <Link to={`${pathname}/${title}`} onClick={this.selectRealty(realtyInfo)}>
                <div className="col-xs-12 matches">
                    <img src={imgUrl} className="photo" alt="realty photo"/>
                    <div className="short-info">
                        <p className="title">{title}</p>
                        <p className="price">{price}$</p>
                        <p className="property_type">{propertyType}</p>
                    </div>
                </div>
            </Link>
        );
    }
}
function mapStateToProps(state) {
    return {
        realty: state.realty
    };
}

const mapDispatchToProps = {
    selectRealty
};

export default connect(mapStateToProps, mapDispatchToProps)(Realty);