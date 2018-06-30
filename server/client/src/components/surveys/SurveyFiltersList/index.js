import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './surveyFiltersList.css';

const SurveyFiltersList = ({ handleChange, handleSortAsc, handleSortDesc }) => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-12 col-sm-12">
        <input onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter survey title" id="filterInput" /></div>
        <div className="col-lg-4 col-md-12 col-sm-12">
        <Button bsStyle="primary" bsSize="large" onClick={handleSortAsc} className="sort-btn" id="btn-asc">
          Oldest To Newest
        </Button></div>
        <div className="col-lg-4 col-md-12 col-sm-12">
        <Button bsStyle="info" bsSize="large" onClick={handleSortDesc} className="sort-btn" id="btn-desc">
          Newest To Oldest
        </Button>
      </div>
    </div>
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