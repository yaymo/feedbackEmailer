import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from '../SurveyForm/';
import SurveyFormReview from '../SurveyFormReview/';

export class SurveyNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormReview: false
        };
    }

    handleCancel = () => {
        this.setState({ showFormReview: false });
    }

    handleSubmit = () => {
        this.setState({ showFormReview: true });
    }

    renderContent() {
        if(this.state.showFormReview) {
            return <SurveyFormReview onCancel={ this.handleCancel }/>;
        }
        return ( 
            <SurveyForm onSurveySubmit={ this.handleSubmit }/>
        );
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);