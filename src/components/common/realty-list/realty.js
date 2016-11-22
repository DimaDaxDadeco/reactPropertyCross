import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import { selectRealty } from "../../results/action";
import { connect } from "react-redux";

class Realty extends Component {

    componentDidMount() {
        if (this.props.realty.selectedRealty) {
            this.scrollToSelectedElement();
        }
    }

    selectRealty = () => {
        const { selectRealty, realtyInfo } = this.props;
        selectRealty(realtyInfo);
    }

    scrollToSelectedElement = () => {
        const node = ReactDOM.findDOMNode(this);
        const { realty: { selectedRealty }, realtyInfo } = this.props;

        if (realtyInfo === selectedRealty) {
             node.scrollIntoView();
        }
    }

    render() {

        const { pathname, realtyInfo: { title, price, propertyType, img_url: imgUrl } } = this.props;

        return (
            <Link to={`${pathname}/${title}`} onClick={this.selectRealty}>
                <div className="col-xs-12 matches">
                    <img src={imgUrl} className="photo" alt="realty photo" />
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

const mapStateToProps = ({ realty }) => ({ realty });


const mapDispatchToProps = {
    selectRealty
};

export default connect(mapStateToProps, mapDispatchToProps)(Realty);