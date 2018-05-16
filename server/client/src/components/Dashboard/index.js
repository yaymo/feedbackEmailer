import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SurveyList from '../surveys/SurveyList/';
import { fetchSurveys, deleteSurvey } from '../../actions/';
import './Dashboard.css';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            filterText: ''
        }
    }

    static propTypes = {
        auth: PropTypes.shape({
            credits: PropTypes.number
        }),
        surveys: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string,
            body: PropTypes.string,
            dateSent: PropTypes.string,
            yes: PropTypes.number,
            no: PropTypes.number
        })),
        fetchSurveys: PropTypes.func,
        deleteSurvey: PropTypes.func
    }

    static defaultProps = {
        auth: {
            credits: 0
        },
        surveys: {
            _id: '',
            title: '',
            body: '',
            dateSent: '',
            yes: 0,
            no: 0
        },
        fetchSurveys: () => {},
        deleteSurvey: () => {}
    }

    componentDidMount() {
        this.props.fetchSurveys();
    } 

    render() {
        const { isLoading } = this.props;
        const surveys = this.props.surveys.filter(survey => {
            return survey.title.toLowerCase().includes(this.state.filterText.toLowerCase());
        });
        return (
            <div>
                <SurveyList surveys={surveys} isLoading={isLoading}
                    handleChange={filterText => this.setState({ filterText })} />
                <div className="fixed-action-btn">
                    {this.props.auth && this.props.auth.credits ?
                        <Link to="/surveys/new" className="btn btn-danger btn-lg plus">
                            +
                        </Link>
                        :
                        <button className="btn btn-secondary btn-lg plus zero">
                            +
                        </button>
                    }
                </div>
            </div>
        );
    }
};
function mapStateToProps({ auth, surveys: { surveys, isLoading }}) {
    return {
        auth,
        surveys,
        isLoading
    }
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(Dashboard);