import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Card from '../../Card/';
import LoadingIndicator from '../../Loading/';
import { deleteSurvey } from '../../../actions/';


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
    handleChange: PropTypes.func
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
    handleChange: () => {}
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
        <Button bsStyle="primary" bsSize="large" onClick={ () => console.log('clicking')}>
          Oldest To Newest
        </Button>
        { this.props.isLoading && <LoadingIndicator /> }
        <div className="row">
          {surveys}
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteSurvey })(SurveyList);