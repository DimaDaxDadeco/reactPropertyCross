import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import ErrorModal from "./error";
import { hideModal } from "./action";

const modals = new Map([
    ["error", modalProps => <ErrorModal {...modalProps} />]
]);

class Modal extends Component {

    hideModal = e => {
        if (e.target === ReactDOM.findDOMNode(this.refs.modalWrap) || e.target === ReactDOM.findDOMNode(this.refs.buttonOk)) {
            this.props.hideModal();
        }
    }

    render() {

        const { modalProps, isModalShowing } = this.props;

        if (!isModalShowing || !modalProps || !modalProps.type) {
            return null;
        }

        return (
            <div className="modal-wrap" ref="modalWrap" onClick={this.hideModal}>
                <div className="error-modal">
                    {modals.get(modalProps.type)(modalProps)}
                    <button className="btn btn-default button-ok" ref="buttonOk">Ok</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ modalView: { isModalShowing, modalProps } }) => ({
    isModalShowing,
    modalProps
});

const mapDispatchToProps = {
    hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);