import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class Realty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFavourite: true
        };
    }

    componentDidMount() {
        const { title } = this.props.realty.eachRealtyInfo;
        if (!localStorage.favourites) {
            localStorage.favourites = JSON.stringify([]);
        }
        this.setState({
            addFavourite: !this.isRealtyFavorite(title)
        });
    }

    isRealtyFavorite = title => {
        const favourites = JSON.parse(localStorage.favourites);
        return favourites.some(currentValue => currentValue.title === title);
    }

    addFavourite = eachRealtyInfo => () => {
        const favourites = JSON.parse(localStorage.favourites);
        favourites.unshift(eachRealtyInfo);
        localStorage.favourites = JSON.stringify(favourites);
        this.setState({
            addFavourite: false
        });
    }

    render() {

        const { title, price, property_type: propertyType, summary, bathroom_number: bathroomNumber, bedroom_number: bedroomNumber, img_url: imgUrl } = this.props.realty.eachRealtyInfo;
        const { pathname } = this.props.location;
        const backLink = pathname.split("/").slice(0, -1).join("/");

        return (
            <div className="row realty">
                <div id="back-button" className="btn btn-default">
                    <Link to={backLink}>Back</Link>
                </div>
                { this.state.addFavourite ? <button id="favourite-add" className="btn btn-default" onClick={this.addFavourite(this.props.realty.eachRealtyInfo)}>+</button> : null }
                <img src={imgUrl} alt="realty photo" />
                <p>{title}</p>
                <p>{price}</p>
                <p>{propertyType}</p>
                <p>{summary}</p>
                <p>{bathroomNumber}</p>
                <p>{bedroomNumber}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        realty: state.realty
    };
}

export default connect(mapStateToProps)(Realty);