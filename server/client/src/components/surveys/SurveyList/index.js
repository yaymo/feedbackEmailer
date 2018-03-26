import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../../actions';
import Card from '../../Card/'

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(({ _id, title, body, dateSent, yes, no}) => {
            return (
                <Card key={_id} title={title}
                    body={body} dateSent={dateSent}
                    yes={yes} no={no}
                    onDelete={() => this.props.deleteSurvey(_id)} />
            )
        });
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
