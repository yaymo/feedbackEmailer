import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SurveyField from '../SurveyField/';
import RecipientField from '../RecipientField';
import validateEmails from '../../../utils/validateEmails';
import formFields from '../FormFields/';
import { Grid, Button } from 'react-bootstrap';
import './SurveyForm.css';

export class SurveyForm extends Component {
    state = { isOpen: false }
    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
        handleSubmit: PropTypes.func,
        onSurveySubmit: PropTypes.func,
        contacts: PropTypes.array
    }

    static defaultProps = {
        label: '',
        name: '',
        handleSubmit: () => {},
        onSurveySubmit: () => {},
        contacts: []
    }
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field component={SurveyField} type="text"
                        label={label} name={name} key={name} />
        });
    }

    handleToggle = () => {
        this.setState(({ isOpen }) => ({isOpen: !isOpen}))
    }
    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <Grid>
                    <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className="survey-form">
                        {this.renderFields()}
                        <Field component={RecipientField} type="text" name="recipients" key="recipients" isOpen={isOpen}
                            handleToggle={this.handleToggle}  recipients={this.props.contacts}/>
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
//TODO: fix validation for emails
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