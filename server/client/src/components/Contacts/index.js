import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';

class Contacts extends Component {

  static propTypes = {
    submitContact: PropTypes.func,
    form: PropTypes.shape({
      values: PropTypes.object
    }),
    reset: PropTypes.func
  }

  static defaultProps = {
    submitContact: () => {},
    form: {
      values: {}
    },
    reset: () => {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitContact(this.props.form.values);
    this.handleClear();
  }

  handleClear = () => {
    this.props.reset();
  }

  render() {
    return (
      <React.Fragment>
        <ContactForm onContactSubmit={(e) => this.handleSubmit(e) }
          handleClear={this.handleClear } />
        <ContactTable />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
     form: state.form.contactForm
  }
}
const connectedForm = connect(mapStateToProps, actions)(Contacts);

export default reduxForm({
  form: 'contactForm',
})(connectedForm);