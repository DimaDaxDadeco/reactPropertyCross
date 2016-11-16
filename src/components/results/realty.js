import React, { Component } from "react";
import { connect } from "react-redux";

export default class Realty extends Component {
    render() {

        const title = this.props.title;
        const price = this.props.price;
        const propertyType = this.props.propertyType;
        const imgUrl = this.props.imgUrl;

        return (
            <div className="col-xs-12 matches">
                <img src={imgUrl} className="photo"/>
                <div className="short-info">
                    <p className="title">{title}</p>
                    <p className="price">{price}$</p>
                    <p className="property_type">{propertyType}</p>
                </div>
            </div>
        );
    }
}