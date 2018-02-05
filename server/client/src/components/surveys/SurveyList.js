import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchSurveys, deleteSurvey } from '../../actions';
import '../styles/SurveyList.css';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="col s12 m6 l6" key={survey._id}>
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title">{survey.title}</span>
                            <p>
                                {survey.body}
                            </p>
                            <p className="right">
                                Sent on: {moment(survey.dateSent).format('l')}
                            </p>
                        </div>
                        <div className="card-action">
                            <a>Yes2: {survey.yes}</a>
                            <a>No: {survey.no}</a>
                            <a href="/surveys" onClick={() => this.props.deleteSurvey(survey._id)}>
                                <i className="material-icons small grey-text right ">delete</i>
                            </a>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
        <div className="row">
            {this.renderSurveys()}
        </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return {
        surveys
    }
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);
