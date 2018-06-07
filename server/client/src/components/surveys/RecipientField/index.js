import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RecipientList from '../RecipientList';

const RecipientField = ({ input, isOpen, recipients, handleToggle, meta: { touched, error }}) => {
  return (
    <div>
      <Row>
        <Col sm={ 12 } md={ 12 } lg={ 12 } >
          <label>Recipient List</label>
        </Col>
      </Row>
      <Row>
        <Col sm={ 12 } md={ 12 } lg={ 12 } >
          <input {...input} className="field-input" onClick={handleToggle} />
          { isOpen &&
            <RecipientList recipients={recipients} />
          }
        </Col>
      </Row>
      <div className="red-text error">
        { touched && error }
      </div>
    </div>
  )
};
RecipientField.propTypes = {
  isOpen: PropTypes.bool,
  handleToggle: PropTypes.func,
  input: PropTypes.object,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }),
  recipients: PropTypes.array
}
RecipientField.defaultProps = {
  handleBlur: () => {},
  isOpen: false,
  handleToggle: () => {},
  input: {},
  meta: {
    touched: false,
    error: ''
  },
  recipients: []
}
export default RecipientField;