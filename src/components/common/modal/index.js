import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: false
        };
    }

    hide = () => {
        this.setState({
            view: false
        });
    }

    componentWillReceiveProps() {
        console.log(this.state.view);
        this.setState({
            view: true
        });
    }

    render() {

        const responseCode = this.props.modalError.responseCode;
        const responseText = this.props.modalError.responseText;
        const view = this.state.view;

        return (
            <div>
            {
                view ?
                    <div id="error-wrap">
                        <div className="hide-wrap" onClick={this.hide}></div>
                        <div id="error-modal">
                            <p className="error-type">{responseCode}</p>
                            <p className="error-text">{responseText}</p>
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

export default connect(mapStateToProps)(Modal);