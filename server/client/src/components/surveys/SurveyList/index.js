import React from 'react';
import Card from '../../Card/';
import LoadingIndicator from '../../Loading/';
import { deleteSurvey } from '../../../actions/';
import { connect } from 'react-redux';

class SurveyList extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        const surveys = this.props.surveys.map(({ _id, title, body, dateSent, yes, no}) => {
            return (
                <Card key={_id} title={title}
                    body={body} dateSent={dateSent}
                    yes={yes} no={no} _id={_id}
                    onDelete={ () => { this.props.deleteSurvey(_id) }} />
            )
        });
        return (
            <div className="container">
                <input onChange={ (e) => this.props.handleChange(e.target.value) } style={{width: '200px', height: '40px', marginTop: '30px'}}/>
                { this.props.isLoading && <LoadingIndicator /> }
                <div className="row">
                    {surveys}
                </div>
            </div>
        );
    }
} 
export default connect(null, { deleteSurvey })(SurveyList);