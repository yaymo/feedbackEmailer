import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Glyphicon } from 'react-bootstrap';
import { fetchSurveys, deleteSurvey } from '../../actions';
import '../../styles/SurveyList.css';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                    <div className="col-sm-12 col-md-6 col-lg-6" key={survey._id}>
                        <div className="card-item">
                            <div className="item-content">
                                <h3 className="item-title">{survey.title}</h3>
                                <h5 className="item-body">
                                    Loops
                                    <div className="survey-loops">
                                        { survey.body }
                                    </div>
                                </h5>
                                <p className="survey-created">
                                        Sent on: {moment(survey.dateSent).format('l')}
                                </p>
                            </div>
                            <div className="card-data">
                                <a>Yes: {survey.yes}</a>
                                <a>No: {survey.no}</a>
                                <a href="/surveys" 
                                    onClick={() => this.props.deleteSurvey(survey._id)}
                                    className="delete-survey">
                                    <Glyphicon glyph="trash"></Glyphicon>
                                </a>
                            </div>
                        </div>
                    </div>
            )
        })
    }
    render() {
        return (
        <div className="container">
            <div className="row">
                {this.renderSurveys()}
            </div>
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
