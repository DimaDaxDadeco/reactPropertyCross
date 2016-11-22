import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class Realty extends Component {

    constructor(props) {
        super(props);
        this.init();
    }

    init() {
        const { title } = this.props.realty.selectedRealty;
        this.state = {
            isFavourite: !this.isRealtyFavorite(title)
        };
    }

    isRealtyFavorite = title => {
        const favourites = JSON.parse(localStorage.favourites);
        return favourites.some(currentValue => currentValue.title === title);
    }

    isFavourite = selectedRealty => () => {
        const favourites = JSON.parse(localStorage.favourites);
        favourites.unshift(selectedRealty);
        localStorage.favourites = JSON.stringify(favourites);
        this.setState({
            isFavourite: false
        });
    }

    render() {
        const { title, price, property_type: propertyType, summary, bathroom_number: bathroomNumber, bedroom_number: bedroomNumber, img_url: imgUrl } = this.props.realty.selectedRealty;
        const { isFavourite } = this.state;
        const { pathname } = this.props.location;
        const backLink = pathname.split("/").slice(0, -1).join("/");

        return (
            <div className="row realty">
                <div className="btn btn-default back-button">
                    <Link to={backLink}>Back</Link>
                </div>
                { isFavourite && <button className="btn btn-default favourite-add" onClick={this.isFavourite(this.props.realty.selectedRealty)}>+</button> }
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

const mapStateToProps = ({ realty }) => ({ realty });

export default connect(mapStateToProps)(Realty);