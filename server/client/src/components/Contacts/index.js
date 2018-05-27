import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';

class Contacts extends Component {

  static propTypes = {
    children: PropTypes.array
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitContact(this.props.form.values);
  }

  render() {
    return (
      <React.Fragment>
        <ContactForm onContactSubmit={(e) => this.handleSubmit(e) } />
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
export default connect(mapStateToProps, actions)(Contacts);