import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorModal from "./error";
import { resetModal } from "./action";

const modals = new Map([
    ["error", modalProps => <ErrorModal {...modalProps} />]
]);

class Modal extends Component {
    render() {

        const { modalProps, isModalShowing, resetModal } = this.props;

        if (!isModalShowing || !modalProps || !modalProps.type) {
            return null;
        }

        return (
            <div className="error-wrap">
                <div className="hide-wrap" onClick={resetModal} />
                {modals.get(modalProps.type)(modalProps)}
            </div>
        );
    }
}

const mapStateToProps = ({ modalView: { isModalShowing, modalProps } }) => ({
    isModalShowing,
    modalProps
});

const mapDispatchToProps = {
    resetModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);