import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';
import LoadingIndicator from '../Loading';

export class Contacts extends Component {

  static propTypes = {
    submitContact: PropTypes.func,
    contactForm: PropTypes.shape({
      values: PropTypes.object
    }),
    reset: PropTypes.func,
    isLoading: PropTypes.bool
  }

  static defaultProps = {
    submitContact: () => {},
    contactForm: {
      values: {}
    },
    reset: () => {},
    isLoading: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitContact(this.props.contactForm.values);
    this.handleClear();
  }

  handleClear = () => {
    this.props.reset();
  }

  render() {
    const { isLoading } = this.props
    return (
      <React.Fragment>
        { isLoading && <LoadingIndicator />}
        <ContactForm onContactSubmit={(e) => this.handleSubmit(e) }
          handleClear={this.handleClear } />
        <ContactTable />
      </React.Fragment>
    );
  }
}

function mapStateToProps({ form: { contactForm }, contacts: { isLoading }}) {
  return {
     contactForm,
     isLoading
  }
}
const connectedForm = connect(mapStateToProps, actions)(Contacts);

export default reduxForm({
  form: 'contactForm',
})(connectedForm);