import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router";

const realtys = [
        {
            id: 1,
            name: "house1"
        },
        {
            id: 2,
            name: "house2"
        },
        {
            id: 3,
            name: "house24"
        }
    ];

class RealtysList extends React.Component {

    searchLocation() {
        const url = "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds";
        fetch(url).then(response => response.json())
                .then(data => {
                    console.log(data);
            });
    }

    searchMyLocation() {
        console.log("search my location");
    }

    state = {
        displayedRealtys: realtys
    }

    render() {
        return (
            <div className="search-top">
                <div className="row">
                    <div className="col-xs-12 favorites"><a className="btn btn-default pull-right" role="button">Favourite</a></div>
                </div>
                <div className="row">
                    <p className="col-xs-12">Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!</p>
                </div>
                <div className="row">
                    <div className="col-xs-12 form-inline">
                            <input type="text" name="searchText" placeholder="Search..." className="search-text form-control"/>
                            <input type="submit" name="go" className="btn btn-default" value="Go" onClick={this.searchLocation} />
                            <input type="submit" name="myLocation" className="btn btn-default" value="My location" onClick={this.searchMyLocation} />
                    </div>
                </div>
               {
                    this.state.displayedRealtys.map(el =>
                        <Realty
                            key={el.id}
                            name={el.name}
                        />
                    )
                }
            </div>
        );
    }
}

class Realty extends React.Component {
    render() {
        return (
            <div className="row">
                <p>{this.props.name}</p>
             </div>
        );
    }
}

ReactDOM.render(<RealtysList />, document.getElementById("container"));