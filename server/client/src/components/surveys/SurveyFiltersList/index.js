import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SurveyFiltersList = ({ handleChange, handleSortAsc, handleSortDesc }) => {
  return (
    <Fragment>
      <input onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter survey title"
        style={{ width: '250px', height: '50px', marginTop: '30px', marginRight: '30px'}}/>
      <Button bsStyle="primary" bsSize="large" onClick={handleSortAsc} id="btn-asc">
        Oldest To Newest
      </Button>
      <Button bsSize="large" onClick={handleSortDesc} id="btn-desc">
      Newest To Oldest
      </Button>
    </Fragment>
  )
}
SurveyFiltersList.propTypes = {
  handleChange: PropTypes.func,
  handleSortAsc: PropTypes.func,
  handleSortDesc: PropTypes.func
}
SurveyFiltersList.defaultProps = {
  handleChange: () => {},
  handleSortAsc: () => {},
  handleSortDesc: () => {}
}
export default SurveyFiltersList;