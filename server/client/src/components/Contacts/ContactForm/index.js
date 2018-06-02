import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Row, Grid } from 'react-bootstrap';
import ContactField from '../ContactField';
import ContactFormFields from '../ContactFormFields';
import validateEmails from '../../../utils/validateEmails'
import './contactForm.css';

export class ContactForm extends Component {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    onContactSubmit: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool
  }
  static defaultProps = {
    label: '',
    name: '',
    onContactSubmit: () => {},
    handleClear: () => {},
    pristine: true,
    submitting: false,
    invalid: false
  }
  renderFields() {
    return _.map(ContactFormFields, ({ name, label }) => {
      return <Field component={ ContactField } type="text"
         name={ name } key={ name } placeholder={`Enter ${label}`}/>
    });
  }

  render() {
    const { pristine, submitting, invalid } = this.props;
    return (
      <Grid>
        <form onSubmit={(e) => this.props.onContactSubmit(e)} id="contact-form">
          <Row>
          { this.renderFields() }
          </Row>
          <Row>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <button type="button" className="btn btn-info btn-lg contact-btn"
                onClick={ this.props.handleClear } disabled={ pristine || submitting }>
                Clear
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <button type="submit" className="btn btn-success btn-lg pull-right contact-btn"
                disabled={ pristine || submitting || invalid }>
                Add
              </button>
            </div>
          </Row>
        </form>
      </Grid>
    )
  }
}

function validate(values) {
  const errors = {};
  errors.email = validateEmails(values.email || '');
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