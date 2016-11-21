import React from "react";
import { Link } from "react-router";

const Location = ({ index, title, totalResults }) => (
    <div className="col-xs-12 search-res">
         <Link to={`/results/${title}`}>
            <span className="index">#{index}</span>
            <span className="title">{title}(<span className="totalResults">{totalResults}</span>)</span>
        </Link>
    </div>
);
export default Location;