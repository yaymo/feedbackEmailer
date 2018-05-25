import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SurveyList from '../surveys/SurveyList/';
import { fetchSurveys } from '../../actions/';
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
        isLoading: PropTypes.bool,
        surveys: PropTypes.array,
        fetchSurveys: PropTypes.func
    }

    static defaultProps = {
        auth: {
            credits: 0
        },
        isLoading: false,
        surveys: [],
        fetchSurveys: () => {}
    }

    componentDidMount() {
        this.props.fetchSurveys();
    }

    handleChange = (filterText) => {
        this.setState({filterText});
    }

    render() {
        const { isLoading } = this.props;
        const surveys = this.props.surveys.filter(survey => survey.title.includes(this.state.filterText.trim().toLowerCase() || ''));
        return  (
            <div>
                <SurveyList surveys={surveys} isLoading={isLoading}
                    handleChange={filterText => this.handleChange( filterText )} />
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
}
function mapStateToProps({ auth, surveys: { surveys, isLoading }}) {
    return {
        auth,
        surveys,
        isLoading
    }
}

export default connect(mapStateToProps, { fetchSurveys })(Dashboard);