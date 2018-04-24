import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Payments from '../Payments/';
import './credits.css';

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
            <div className="jumbotron jumbotron-fluid">
                <div className='container-fluid'>
                    <h1 className='display-4 text-center'><u>CREDITS</u></h1>
                    <div>
                        <h2>Remaining Credits: <span>{ auth && auth.credits }</span> </h2>
                        <h3>Do you need more?</h3> <Payments />
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        auth: state.auth,

    }
}
export default connect(mapStateToProps)(Credits);