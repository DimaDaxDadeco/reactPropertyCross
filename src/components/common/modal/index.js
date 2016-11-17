import React, { Component } from "react";
import { connect } from "react-redux";
import { resetModalError } from "./action";

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: false
        };
    }

    componentWillReceiveProps() {
        console.log(this.props);
    }

    hide = () => {
        this.setState({
            view: false
        });
        this.resetModalError();
    }

    render() {
        return (
            <div>
            { this.state.view ?
                <div id="error-wrap">
                    <div className="hide-wrap" onClick={this.hide}></div>
                    <div id="error-modal">
                        <p className="error-type">101</p>
                        <p className="error-text">You are stupid</p>
                    </div>
                </div> : null
            }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modalError: state.modalError
    };
}

const mapDispatchToProps = {
    resetModalError
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);