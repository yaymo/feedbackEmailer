import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import formFields from '../FormFields/';
import * as actions from '../../../actions/';
import './SurveyFormReview.css';

export const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name} className="review-fields">
        <label className="form-label"> {label} </label>
        <div className="form-value">
          {formValues[name]}
        </div>
      </div>
    );
  })
  return (
    <div className="survey-review">
      <h5 className="header">Please confirm your entries</h5>
      {reviewFields}
      <Button bsStyle="warning" bsSize="large" onClick={onCancel}>
        Back
      </Button>
      <Button onClick={() => submitSurvey(formValues, history)} bsStyle="success" bsSize="large" className="pull-right">
        Send Survey
      </Button>
    </div>
  );
};

SurveyFormReview.propTypes = {
  onCancel: PropTypes.func,
  submitSurvey: PropTypes.func,
  history: PropTypes.object,
  formValues:PropTypes.object
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));