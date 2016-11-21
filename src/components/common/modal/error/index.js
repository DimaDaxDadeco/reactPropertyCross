import React from "react";
import { resetModal } from "../action";
import { connect } from "react-redux";

const ErrorModal = ({ responseCode, responseText, resetModal }) => (
    <div className="error-wrap">
        <div className="hide-wrap" onClick={resetModal} />
        <div className="error-modal">
            <p className="error-type">{responseCode}</p>
            <p className="error-text">{responseText}</p>
        </div>
    </div>
);

const mapDispatchToProps = {
    resetModal
};

export default connect(null, mapDispatchToProps)(ErrorModal);