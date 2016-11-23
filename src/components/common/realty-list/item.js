import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import { selectRealty } from "../../realty/action";
import { connect } from "react-redux";

class Realty extends Component {

    componentDidMount() {
        const { realty: selectedRealty, realtyInfo } = this.props;
        console.log(realtyInfo);
        console.log(selectedRealty);
        if (realtyInfo === selectedRealty) {
            this.scrollToSelectedElement();
        }
    }

    selectRealty = () => {
        const { selectRealty, realtyInfo } = this.props;
        selectRealty(realtyInfo);
    }

    scrollToSelectedElement = () => {
        const node = ReactDOM.findDOMNode(this);
        node.scrollIntoView();
    }

    constructUrl = ({ pathname }) => ({
        pathname: `${pathname}/${this.props.realtyInfo.title}`
    })

    render() {

        const { realtyInfo: { title, price, propertyType, img_url: imgUrl } } = this.props;

        return (
            <Link to={this.constructUrl} onClick={this.selectRealty}>
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