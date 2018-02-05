import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyList from './surveys/SurveyList';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <SurveyList />
                <div className="fixed-action-btn">
                    {this.props.auth && this.props.auth.credits ?
                        <Link to="/surveys/new" className="btn-floating btn-large red">
                            <i className="material-icons">add</i>
                        </Link>
                        :
                    <button className="btn-floating btn-large disabled">
                        <i className="material-icons">add</i>
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