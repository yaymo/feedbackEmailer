import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SurveyField from '../SurveyField/';
import validateEmails from '../../../utils/validateEmails';
import formFields from '../FormFields/';
import { Grid, Button } from 'react-bootstrap';
import './SurveyForm.css';

export class SurveyForm extends Component {

    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
        handleSubmit: PropTypes.func,
        onSurveySubmit: PropTypes.func
    }

    static defaultProps = {
        label: '',
        name: '',
        handleSubmit: () => {},
        onSurveySubmit: () => {}
    }
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field component={SurveyField} type="text"
                        label={label} name={name} key={name} />
        });
    }
    render() {
        return (
            <div>
                <Grid>
                    <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className="survey-form">
                        {this.renderFields()}
                        <Link to="/surveys" className="btn btn-lg btn-danger">Cancel</Link>
                        <Button type="submit" bsStyle="primary" bsSize="large" className="pull-right">
                            Next
                        </Button>
                    </form>
                </Grid>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');
    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a value`;
        }
    })
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);