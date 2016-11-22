import React from "react";
// import { connect } from "react-redux";

const ErrorModal = ({ responseCode, responseText }) => (
    <div className="error-modal">
        <p className="error-type">{responseCode}</p>
        <p className="error-text">{responseText}</p>
    </div>
);

export default ErrorModal;