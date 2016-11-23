import React from "react";

const ErrorModal = ({ responseCode, responseText }) => (
    <div>
        <p className="error-type">{responseCode}</p>
        <p className="error-text">{responseText}</p>
    </div>
);

export default ErrorModal;