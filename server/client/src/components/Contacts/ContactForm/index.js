import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import ContactField from '../ContactField';
import ContactFormFields from '../ContactFormFields';
import validateEmails from '../../../utils/validateEmails'
import './contactForm.css';

export class ContactForm extends Component {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    handleSubmit: PropTypes.func,
    onContactSubmit: PropTypes.func
  }
  static defaultProps = {
    label: '',
    name: '',
    handleSubmit: () => {},
    onContactSubmit: () => {}
  }
  renderFields() {
    return _.map(ContactFormFields, ({ name, label }) => {
      return <Field component={ ContactField } type="text"
         name={ name } key={ name } placeholder={`Enter ${label}`}/>
    });
  }

  render() {
    return (
      <Grid>
        <form onSubmit={(e) => this.props.onContactSubmit(e)}>
          <Row>
          { this.renderFields() }
          </Row>
          <Row>
          <div className="col-sm-12 col-md-6 col-lg-6">
          <button type="button" className="btn btn-info btn-lg contact-btn">
            Clear
          </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
          <button type="submit" className="btn btn-success btn-lg pull-right contact-btn" >
            Add
          </button>
          </div></Row>
        </form>
      </Grid>
    )
  }
}

function validate(values) {
  const errors = {};
  errors.Email = validateEmails(values.Email || '');
  _.each(ContactFormFields, ({ name }) => {
    if(!values[name]) {
      errors[name] = 'You must provide a value';
    }
  })
  return errors;
}
export default reduxForm({
  validate,
  form: 'contactForm',
})(ContactForm);