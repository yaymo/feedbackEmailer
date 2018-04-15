import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SurveyList from '../surveys/SurveyList/';
import './Dashboard.css';

export class Dashboard extends Component {

    static propTypes = {
        auth: PropTypes.shape({
            credits: PropTypes.number
        })
    }

    static defaultProps = {
        auth: {
            credits: 0
        }
    }

    render() {
        return (
            <div>
                <SurveyList />
                <div className="fixed-action-btn">
                    {this.props.auth && this.props.auth.credits ?
                        <Link to="/surveys/new" className="btn btn-danger btn-lg plus">
                            +
                            {/*TODO: find icon library*/}
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
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Dashboard);