import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ErrorModal extends Component {
    hideModal = e => {
        if (e.target === ReactDOM.findDOMNode(this.refs.buttonOk)) {
            this.props.hideModal();
        }
    }
    render() {
        const { responseCode, responseText } = this.props;
        return (
            <div>
                <p className="error-type">{responseCode}</p>
                <p className="error-text">{responseText}</p>
                <button className="btn btn-default button-ok" ref="buttonOk" onClick={this.hideModal}>Ok</button>
            </div>
        );
    }
}