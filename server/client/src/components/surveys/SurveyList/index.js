import React from 'react';
import Card from '../../Card/';
import LoadingIndicator from '../../Loading/';

export default function SurveyList(props) { 

    const surveys = props.surveys.map(({ _id, title, body, dateSent, yes, no}) => {
            return (
                <Card key={_id} title={title}
                    body={body} dateSent={dateSent}
                    yes={yes} no={no} _id={_id}
                    onDelete={ () => { this.props.deleteSurvey(_id) }} />
            )
        });

        return (
            <div className="container">
                <input onChange={ (e) => props.handleChange(e.target.value) } style={{width: '200px', height: '40px', marginTop: '30px'}}/>
                { props.isLoading && <LoadingIndicator /> }
                <div className="row">
                    {surveys}
                </div>
            </div>
        );
    }