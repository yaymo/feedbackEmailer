import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './SurveyField.css';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <Row>
                <Col sm={ 12 } md={ 12 } lg={ 12 } >
                    <label>{ label }</label>
                </Col>
                </Row>
                <Row>
                <Col sm={ 12 } md={ 12 } lg={ 12 } >
                    <input {...input} className="field-input" />
                </Col>
            </Row>
            <div className="red-text error">
                { touched && error }
            </div>
        </div>
    );
}