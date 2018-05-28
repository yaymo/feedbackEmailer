import React from 'react';
import PropTypes from 'prop-types';

const ContactField = ({ input, placeholder, meta: { error, touched }}) => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4">
      <input {...input} className="field-input" placeholder={placeholder}/>
      <div className="red-text error">
        { touched && error }
      </div>
    </div>
  )
}
ContactField.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  })
}
ContactField.defaultProps = {
  placeholder: '',
  input: {},
  meta: {
    error: '',
    touched: false
  }
}
export default ContactField;