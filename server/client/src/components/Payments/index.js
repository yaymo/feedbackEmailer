import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import StripeCheckout from 'react-stripe-checkout';
import './payments.css';

class Payments extends Component {

    static propTypes = {
        handleToken: PropTypes.func
    }

    static defaultProps = {
        handleToken: () => {}
    }
    render() {
        return (
            <StripeCheckout
                name="Loop.io Email Credits"
                description="Pay $5 for 5 email credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
                <button type='button' className='btn btn-lg btn-success stripe-btn'>
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}
export default connect(null, actions)(Payments);