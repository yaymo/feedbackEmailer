import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';
import formFields from './formFields';
import * as actions from '../../actions/index';
import '../../styles/SurveyFormReview.css';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
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
            <Button 
                bsStyle="warning" bsSize="large"
                onClick={onCancel}>
                Back
            </Button>
            <Button 
                onClick={() => submitSurvey(formValues, history)}
                bsStyle="success" bsSize="large" className="pull-right">
                Send Survey
            </Button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));