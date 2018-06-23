import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../Card/';
import LoadingIndicator from '../../Loading/';
import SurveyFiltersList from '../SurveyFiltersList';
import EmptyList from '../../EmptyList';
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

  handleSortAsc = () => {
    this.props.sortSurveysAsc(this.props.surveys)
  }

  handleSortDesc = () => {
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
        { this.props.isLoading && <LoadingIndicator /> }
        <SurveyFiltersList handleChange={this.props.handleChange}
          handleSortAsc={ this.handleSortAsc }
          handleSortDesc={ this.handleSortDesc } />
        <div className="row">
          {surveys ? surveys : <EmptyList />}
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteSurvey, sortSurveysDesc, sortSurveysAsc })(SurveyList);