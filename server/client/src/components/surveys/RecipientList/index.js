import React from 'react';
import PropTypes from 'prop-types';

const RecipientList = ({ recipients }) => {

  return (
    <ul>
      { recipients.map((recipient, i) =>
        <li key={i}>{recipient.email}</li>
      )}
    </ul>
  )
}
RecipientList.propTypes = {
  recipients: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string
  }))
}
export default RecipientList;