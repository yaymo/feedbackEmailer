import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Card from '../../Card/';
import LoadingIndicator from '../../Loading/';
import { deleteSurvey, sortSurveysDesc, sortSurveysAsc } from '../../../actions/';


export class SurveyList extends React.Component  {

  static propTypes = {
    surveys: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        dateSent: PropTypes.string,
        yes: PropTypes.number,
        no: PropTypes.number
      })),
    deleteSurvey: PropTypes.func,
    isLoading: PropTypes.bool,
    handleChange: PropTypes.func,
    sortSurveysDesc: PropTypes.func,
    sortSurveysAsc: PropTypes.func
  }

  static defaultProps = {
    surveys: {
      _id: '',
      title: '',
      body: '',
      dateSent: '',
      yes: 0,
      no: 0
    },
    deleteSurvey: () => {},
    isLoading: false,
    handleChange: () => {},
    sortSurveysDesc: () => {},
    sortSurveyAsc: () => {}
  }

  handleClick = () => {
    this.props.sortSurveysAsc(this.props.surveys)
  }

  handleSortClick = () => {
    this.props.sortSurveysDesc(this.props.surveys);
  }

  render() {
    const surveys = this.props.surveys.map(({ _id, title, body, dateSent, yes, no}) => {
      return (
        <Card key={_id} title={title}
          body={body} dateSent={dateSent}
          yes={yes} no={no} _id={_id}
          onDelete={ () => { this.props.deleteSurvey(_id) }} />
      )
    });
    return (
      <div className="container">
        <input onChange={ (e) => this.props.handleChange(e.target.value) }
          placeholder="Enter Survey Title"
          style={{width: '250px', height: '50px', marginTop: '30px', marginRight: '30px'}}/>
        <Button bsStyle="primary" bsSize="large" onClick={ this.handleClick }>
          Oldest To Newest
        </Button>
        <Button bsStyle="default" bsSize="large" onClick={ this.handleSortClick }>
          Newest To Oldest
        </Button>
        { this.props.isLoading && <LoadingIndicator /> }
        <div className="row">
          {surveys}
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteSurvey, sortSurveysDesc, sortSurveysAsc })(SurveyList);