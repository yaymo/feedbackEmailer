import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './SurveyField.css';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
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
SurveyField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  })
}
SurveyField.defaultProps = {
  input: {},
  label: '',
  meta: {
    touched: false,
    error: ''
  }
}
export default SurveyField;