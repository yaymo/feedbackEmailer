import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Payments from '../Payments/';

class Credits extends Component {
    static propTypes = {
        auth: PropTypes.object
    }

    static defaultProps = {
        auth: {}
    }
    render() {
        const { auth } = this.props;
        return (
            <div className="bg-light">
                <h2>Available Credits: <span>{ auth && auth.credits }</span> </h2>
                <h3>Need More?</h3>
                <Payments />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Credits);