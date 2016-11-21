import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorModal from "./error";

const modals = new Map([
    ["error", modalProps => <ErrorModal {...modalProps} />]
]);

class Modal extends Component {
    render() {

        const { modalProps, isModalShowing } = this.props;

        if (!isModalShowing || !modalProps || !modalProps.type) {
            return null;
        }

        return modals.get(modalProps.type)(modalProps);
    }
}

const mapStateToProps = ({ modalView: { isModalShowing, modalProps } }) => ({
    isModalShowing,
    modalProps
});

export default connect(mapStateToProps)(Modal);