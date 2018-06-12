import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './surveyFiltersList.css';

const SurveyFiltersList = ({ handleChange, handleSortAsc, handleSortDesc }) => {
  return (
    <Fragment>
      <input onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter survey title" id="filterInput" />
      <Button bsStyle="primary" bsSize="large" onClick={handleSortAsc} className="sort-btn" id="btn-asc">
        Oldest To Newest
      </Button>
      <Button bsStyle="info" bsSize="large" onClick={handleSortDesc} className="sort-btn" id="btn-desc">
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