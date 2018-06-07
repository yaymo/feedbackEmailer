import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SurveyForm from '../SurveyForm/';
import SurveyFormReview from '../SurveyFormReview/';
import { fetchContacts } from '../../../actions';

export class SurveyNew extends Component {

  state = { showFormReview: false }

  static propTypes = {
    contacts: PropTypes.array,
    fetchContacts: PropTypes.func
  }

  static defaultProps = {
    contacts: [],
    fetchContacts: () => {}
  }

  componentDidMount() {
    this.props.fetchContacts();
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
      <SurveyForm onSurveySubmit={ this.handleSubmit } contacts={this.props.contacts}/>
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
function mapStateToProps({ contacts: { contacts } }) {
  return {
    contacts
  }
}
const connectedSurveyNew = connect(mapStateToProps, { fetchContacts })(SurveyNew);
export default reduxForm({
  form: 'surveyForm'
})(connectedSurveyNew);