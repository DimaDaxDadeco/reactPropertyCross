import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class Realty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFavourite: !this.isRealtyFavorite
        };
    }

    get isRealtyFavorite() {
        const favourites = JSON.parse(localStorage.favourites);
        return favourites.some(el => el.title === this.props.realty.title);
    }

    toggleFavourites = () => {
        const favourites = JSON.parse(localStorage.favourites);
        const { isFavourite } = this.state;
        const { realty, realty: { title } } = this.props;
        if (isFavourite) {
            favourites.unshift(realty);
        } else {
            const numOfMatchingElem = favourites.findIndex(el => el.title === title);
            favourites.splice(numOfMatchingElem, 1);
        }
        localStorage.favourites = JSON.stringify(favourites);
        this.setState({
            isFavourite: !isFavourite
        });
    }

    render() {
        const { title, price, property_type: propertyType, summary, bathroom_number: bathroomNumber, bedroom_number: bedroomNumber, img_url: imgUrl } = this.props.realty;
        const { isFavourite } = this.state;
        const { pathname } = this.props.location;
        const backLink = pathname.split("/").slice(0, -1).join("/");

        return (
            <div className="row realty">
                <div className="btn btn-default back-button">
                    <Link to={backLink}>Back</Link>
                </div>
                <button id="favourite-toggle" className="btn btn-default favourite-add" onClick={this.toggleFavourites}>
                {isFavourite ? "+" : "-"}
                </button>
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