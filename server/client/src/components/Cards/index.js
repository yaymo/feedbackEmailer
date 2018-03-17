import React from 'react';
import moment from 'moment';
import './card.css'

const Card = ( props ) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6  my-3">
            <div className="card">
                <div className="card-body">
                    <h3 className="item-title">{props.title}</h3>
                    <h5 className="card-text">
                        Loops
                        <div className="survey-loops">{props.body}</div>
                    </h5>
                    <p className="survey-created">
                        Sent on: {moment(props.dateSent).format('l')}
                    </p>
                </div>
                <div className="card-data">
                    <a>Yes: {props.yes}</a>
                    <a>No: {props.no}</a>
                    <a href="/surveys"
                        onClick={props.onDelete}
                        className="delete-survey">
                        Delete
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Card;